import { NextFunction, Request, Response } from "express"
import Connexion from "../controllers/ConnexionController"
import  {RoleUser}  from "../models/IUser"



export const isAdmin =(req:Request,res:Response,next: NextFunction)=>{

    if(Connexion.userConnected.role===RoleUser.Admin){
        next()
    }else{
        res.send({message:"you are not an admin"})
    }
}

export const isArtiste =(req:Request,res:Response,next: NextFunction)=>{
    
    if(Connexion.userConnected.role===RoleUser.Artiste){
        next()
    }else{
        res.send({message:"you are not an artiste"})
    }
}

export const isManager =(req:Request,res:Response,next: NextFunction)=>{
    
    if(Connexion.userConnected.role===RoleUser.Manager){
        next()
    }else{
        res.send({message:"you are not a manager"})
    }
}