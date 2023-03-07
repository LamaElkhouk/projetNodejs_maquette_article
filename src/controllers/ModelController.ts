
import {IModel} from "../models/IModel"
import {IApproval} from "../models/IApproval"
import {Response, Request} from "express"
import Connexion from "../controllers/ConnexionController"
import * as crypto from "crypto"

class Model{

    models:IModel[]= [
        
        {id:crypto.randomUUID(),url : "url vers le fichier",title:"model 1 ",nom_artiste:"artiste 1",approval:[{ id:"1",
                                                                                                                commentaire: " commentaire",
                                                                                                                validated:true,
                                                                                                                nom_manager:"manager 1"}]
        },
        {id:crypto.randomUUID(),url : "url vers le fichier",title:"model 2 ",nom_artiste:"artiste 2",approval:[{ id:"1",
                                                                                                                commentaire: " commentaire",
                                                                                                                validated:true,
                                                                                                                nom_manager:"manager 1"}]},
        {id:crypto.randomUUID(),url : "url vers le fichier",title:"model 3 ",nom_artiste:"artiste 3",approval:[{ id:"1",
                                                                                                                commentaire: " commentaire",
                                                                                                                validated:true,
                                                                                                                nom_manager:"manager 1"}]},
    ];

    public getAllModel= (req:Request,res:Response)=>{    
        return res.send({
            message:"all models",
            data:this.models
        })
    }

    public createModel= (req:Request,res:Response)=>{

        const model:IModel={
            id:crypto.randomUUID(),
            url : req.body.url,
            title:req.body.title,
            nom_artiste:Connexion.userConnected.username,
            approval:req.body.approval
        }
        console.log(model)

        if(!model.url || !model.title|| !model.nom_artiste || !model.approval){
            res.json({message:"les données ne sont valides..."})

        }else{
            const exist_model= this.models.find( m =>{
                if(m.title === model.title){
                    return m
                }
            }) as IModel

            if(exist_model){
                return res.json({message:"ce model existe déjà"})
            }else{
                  //si il existe pas 
                this.models.push(model)
                res.json({data:model,message:`model ${model.title} created`})
            }
        }

    }

    public addApprobationToModel= (req:Request,res:Response)=>{

        const approval:IApproval={
            id:crypto.randomUUID(),
            commentaire: req.body.commentaire,
            validated:req.body.validated,
            nom_manager:Connexion.userConnected.username,
        }

        console.log(approval)

        const id = req.params.id //l'id du model qu'on souhaite lui ajouté une/plusieurs approbation(s)

        const exist_model = this.models.find(model=>{
            if(id===model.id){
                return model
            }
        }) as IModel

            if(exist_model){
                //di le model existe , on peut lui ajouter une/plusieurs approbation(s)

                exist_model.approval.push(approval)

                res.json({data:exist_model,message:`model updated`})

            }else{
                  //si il existe pas 
                res.json({message:`this model doesn't exist ..`})
            }
        
    }
    public deleteModel= (req:Request,res:Response)=>{
        const id =req.params.id
        this.models = this.models.filter(model=>{
            if(id!==model.id){
                return model
            }
        })
        res.json({message:"model deleted!"})
    }
    public updateModel= (req:Request,res:Response)=>{
        const id = req.params.id
        const model = this.models.find(model=>{
            if(id===model.id){
                return model
            }
        })

        this.models = this.models.map(e=> e.id === id ? {...model, ...req.body} : e)

        res.json('model updated')

    }



}

const model = new Model();

export default model