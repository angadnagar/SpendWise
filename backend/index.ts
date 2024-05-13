import express from 'express';
import mainRouter from './routes/main'

const app=express();

app.use('/main',mainRouter);
app.listen(3000,()=>{
    console.log("server is started")
})