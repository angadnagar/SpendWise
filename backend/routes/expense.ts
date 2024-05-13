import { PrismaClient } from '@prisma/client';
import express, { NextFunction, Request, Response } from 'express'
import z from 'zod'
import { authMiddleware } from '../middleware';
import { AuthenticatedRequest } from '../middleware';

const router=express.Router();

const client=new PrismaClient();

const expenseSchema=z.object({
    title:z.string(),
    amount:z.number(),
    userId:z.number()
})

router.post("/create",async (req,res)=>{
    const body=req.body;

    const {success}=expenseSchema.safeParse(body);

    if(!success){
        res.status(411).json({
            message:"Invalid inputs"
        })
    }

    const expense=await client.expense.create({
        data:{
            title:body.title,
            amount:body.amount,
            userId:body.userId
        }
    })

    return res.json({
        message:"expense created successfully"
    })
})

router.get("/get",authMiddleware,async(req:AuthenticatedRequest,res:Response)=>{
    const userId=req.userId;
    try{
    const userExpenses=await client.expense.findMany({
        where:{
            userId:userId
        }
    })

    return res.json({
        expenses:userExpenses
    })

}

catch(err){
    return res.status(411).json({
        message:"error fetching expenses"
    })
}


})

