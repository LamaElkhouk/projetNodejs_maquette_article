import { Request, Response } from "express";
import  { IUser } from "../models/IUser";
import User from "../controllers/UserController"
import bcrypt from 'bcryptjs';
class Connexion{

        userConnected={} as IUser

    public login =  (req:Request, res:Response)=>{
        
        const username=req.body.username
        const password=req.body.password
        const email=req.body.email
        //on verifie si les données sont valides
        console.log(password,)
        //const validPass = await bcrypt.compare(password, this.userConnected.password);
        
        if(!username || !email || !password){
            
            res.json({message:"les données ne sont valides..."})

        }else{
            //on verifie si le user existe dans la table users
            this.userConnected =  User.users.find( async(u) =>{
                
                const validPass = await bcrypt.compare(password, u.password) //on compare le MDP hasher avec celui rentrer par l'utilisateur

                if(u.username === username && u.email===email && validPass===true){
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