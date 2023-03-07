
import {IUser,RoleUser} from "../models/IUser"
import {Response, Request} from "express"
import * as crypto from "crypto"
import bcrypt from 'bcryptjs';

class User{

    users:IUser[]= [
        {id:crypto.randomUUID(),email : "Admin@gmail.com",username:"Admin",password:"azerty1",date_inscription:new Date("05-03-2023"),banned:false,role: RoleUser.Admin},
        {id:crypto.randomUUID(),email : "Artiste@gmail.com",username:"Artiste",password:"azerty2",date_inscription:new Date("05-03-2023"),banned:false,role: RoleUser.Artiste},
        {id:crypto.randomUUID(),email : "Manager@gmail.com",username:"Manager",password:"azerty3",date_inscription:new Date("05-03-2023"),banned:false,role: RoleUser.Manager},
    ];

    public getAllUser= (req:Request,res:Response)=>{    
        return res.json({
            message:"all users",
            data:this.users
        })
    }

    public createUser= async (req:Request,res:Response)=>{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const user:IUser={
            id:crypto.randomUUID(),
            email : req.body.email,
            username:req.body.username,
            password:hashedPassword,
            date_inscription:req.body.date_inscription,
            banned:req.body.banned,
            role: req.body.role
        }
        console.log(user)

        if(!user.email || !user.username|| !user.password || user.banned=== undefined || ! user.role){
            res.json({message:"les données ne sont valides..."})

        }else{
            const exist_user= this.users.find( u =>{
                if(u.username === user.username || u.email===user.email || ( u.username === user.username && u.email===user.email )){
                    return u
                }
            }) as IUser

            if(exist_user){
                return res.json({message:"ce user existe déjà"})
            }else{
                  //si il existe pas 
                this.users.push(user)
                res.json({data:user,message:`user ${user.username} created`})
            }
        }

    }
    public deleteUser= (req:Request,res:Response)=>{
        const id =req.params.id
        this.users = this.users.filter(user=>{
            if(id!==user.id){
                return user
            }
        })
        res.json({message:"user deleted!"})
    }
    public banUser = (req:Request,res:Response)=>{
        const id = req.params.id
        const exist_user = this.users.find(user=>{
            if(id===user.id){
                return user 
            }
        })

        if(exist_user){
            exist_user.banned=true
            return res.json({data:exist_user,message:"this user is banned"})
        }else{
            res.json({message:`this user doesn't exist...`})
        }


    }
    public updateUser= (req:Request,res:Response)=>{
        const id = req.params.id
        const user = this.users.find(user=>{
            if(id===user.id){
                return user 
            }
        })

        this.users = this.users.map(e=> e.id === id ? {...user, ...req.body} : e)

        res.json('User updated')

    }



}

const user = new User();

export default user