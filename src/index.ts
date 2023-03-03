import { Request, Response } from "express";
import { app } from "./app";
app.get("/",(req:Request,resp:Response)=>{
    resp.send("Hello World!!")
})