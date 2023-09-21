import dotenv from 'dotenv'
dotenv.config();

import express from "express"
import cors from "cors"
import foodRouter from './router/food.router'
import usersRouter from './router/user.router'
import { dbConnect } from './config/database.config';
import orderRouter from './router/order.router';

dbConnect()
const app = express()
const port = 3000
app.use(express.json())

app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}))

app.use("/api/foods",foodRouter)
app.use("/api/users",usersRouter)
app.use("/api/orders",orderRouter)

  
app.listen(port,()=>{
 console.log(`server connected on http://localhost: ${port}`);
})

