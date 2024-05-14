import express from 'express'
import { PrismaClient } from '@prisma/client';
import z from 'zod'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config';



const client=new PrismaClient();

const router=express.Router();

const signupSchema=z.object({
    name:z.string(),
    email:z.string().email(),
    password:z.string().min(6)
})

const signinSchema=z.object({
    email:z.string().email(),
    password:z.string().min(6)
})

router.post('/signup',async (req,res)=>{
    const body=req.body;

    const {success}=signupSchema.safeParse(body);

    if(!success){
        console.log(success);
        return res.status(411).json({
            message:"Wrong inputs"
        })
    }

    const user=await client.user.findUnique({
        where:{
            email:body.email
        }
    })

    if(user!=null){
        return res.status(411).json({
            message:"User already exists!"
        })
    }

    const newUser=await client.user.create({
        data:{
            name:body.name,
            email:body.email,
            password:body.password
        }
    })

    const token = jwt.sign({ userId: newUser.id }, JWT_SECRET);

    return res.json({
        token:token
    });

})

router.post("/signin",async (req,res)=>{
    const body=req.body;

    const {success}=signinSchema.safeParse(body);

    if(!success){
        return res.status(411).json({
            message:"Invalid Credentials"
        })
    }

    const user=await client.user.findUnique({
        where:{
            email:body.email,
            password:body.password
        }
    })

    if(user==null){
        return res.status(411).json({
            message:"User does not exists"
        })
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET);

    return res.json({
        message:"user logged in",
        token:token
    })

})

export default router;