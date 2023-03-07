import express from "express"
import Model from "../controllers/ModelController"
import {isArtiste,isManager} from "../middlewares/UserMiddemware"
const modelRouter = express.Router()


modelRouter.get("/models",  Model.getAllModel)
modelRouter.post("/model", isArtiste,  Model.createModel)//un artiste peut créer un model
modelRouter.delete("/model/:id",isArtiste, Model.deleteModel) //un artiste peut surppimer sa propre creation .. (model)
modelRouter.patch("/model/:id",isArtiste, Model.updateModel) //un artiste peut modifier sa propre creation .. (model)
modelRouter.post("/add_approbation_to_model/:id",isManager,Model.addApprobationToModel)
modelRouter.post("/validatedModel/:id",Model.validatedModel) //savoir si la maquette est valide ou pas par els managers
export default modelRouter