import express from 'express'
import userRouter from './user'
import expenseRouter from './expense'

const router=express.Router();

router.use("/user",userRouter)
router.use("/expenses",expenseRouter)

export default router;