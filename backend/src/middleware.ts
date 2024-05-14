import jwt,{JwtPayload} from 'jsonwebtoken'
import { JWT_SECRET } from './config'

import { Request,Response,NextFunction } from 'express'



export const authMiddleware=(req:Request|any,res:Response,next:NextFunction) =>{
      const authHeader=req.headers.authorization;

      if(!authHeader || !authHeader.startsWith('Bearer ')){
         res.status(403).json({
            message:"Authheader does not exist"
        })
        return;
      }

      const token=authHeader.split(' ')[1];

      try{

        const decoded=jwt.verify(token,JWT_SECRET) as JwtPayload;

        if(decoded.userId){
            req.userId=decoded.id
            next();
        }

        else{
            res.status(411).json({
                message:"user does not exists"
            })
            return;
        }

      }
      catch(err){
         res.status(411).json({
            error:"Invalid token"
        })
        return;
      }
}
