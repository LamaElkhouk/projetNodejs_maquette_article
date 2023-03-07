import { Request, Response } from "express";
import  { IApproval } from "../models/IApproval";
import Connexion from "../controllers/ConnexionController"
import * as crypto from "crypto"
class Approval{
    approvals:IApproval[]= [
        {id:crypto.randomUUID(),commentaire: "commentaire negatif",validated:false,nom_manager:"manager 1"},
        {id:crypto.randomUUID(),commentaire: "commentaire positif",validated:true,nom_manager:"manager 2"},
        {id:crypto.randomUUID(),commentaire: "commentaire positif",validated:true,nom_manager:"manager 3"},
    ];

    public getAllApproval= (req:Request,res:Response)=>{    
        return res.send({
            message:"all approvals",
            data:this.approvals
        })
    }

    public createApproval= (req:Request,res:Response)=>{

        const approval:IApproval={
            id:crypto.randomUUID(),
            commentaire: req.body.commentaire,
            validated:req.body.validated,
            nom_manager:Connexion.userConnected.username,
        }
        console.log(approval)

        if(!approval.commentaire || approval.validated=== undefined || !approval.nom_manager){
            res.json({message:"les données ne sont valides..."})

        }else{
                  //si il existe pas 
                this.approvals.push(approval)
                res.json({data:approval,message:`approval added`})
            }
        }

    public deleteApproval= (req:Request,res:Response)=>{
        const id =req.params.id
        this.approvals = this.approvals.filter(approval=>{
            if(id!==approval.id){
                return approval
            }
        })
        res.json({message:"approval deleted!"})
    }
    public updateApproval= (req:Request,res:Response)=>{
        const id = req.params.id
        const approval = this.approvals.find(approval=>{
            if(id===approval.id){
                return approval
            }
        })

        this.approvals = this.approvals.map(e=> e.id === id ? {...approval, ...req.body} : e)

        res.json('approval updated')

    }



}

const approval = new Approval

export default approval 