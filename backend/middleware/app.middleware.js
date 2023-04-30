import express from 'express';
import cors from "cors"
const appMiddleware = (app)=>{
    app.use(cors())
    app.use(express.json());
    app.use(express.urlencoded({extended:true}))
}


export default appMiddleware