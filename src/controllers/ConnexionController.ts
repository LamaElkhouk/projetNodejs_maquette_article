import { Request, Response } from "express";
import  { IUser } from "../models/IUser";
import User from "../controllers/UserController"

class Connexion{

        userConnected={} as IUser

    public login = (req:Request, res:Response)=>{
        
        const {
            username,
            password,
            email
        } = req.body

        //on verifie si les données sont valides
        if(!req.body/*.email || !req.body.password || !req.body.username*/){
            
            res.json({message:"les données ne sont valides..."})

        }else{
            //on verifie si le user existe dans la table users
            this.userConnected = User.users.find( u =>{
                if(u.username === username && u.email===email && u.password===password){
                    return u
                }
            }) as IUser

            if(this.userConnected){
                return res.json({message:`User: ${this.userConnected.username} - Role: ${this.userConnected.role} connected`})
            }else{
                return res.json({message:"user not found.."}) 
            }
        }
    }

    public logout =(req:Request,res:Response)=>{
        this.userConnected={} as IUser
        return res.json({message:"user logout!"});
    }
}

const connexion = new Connexion

export default connexion 