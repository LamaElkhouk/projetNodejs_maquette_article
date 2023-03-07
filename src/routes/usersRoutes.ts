import express from "express"
import User from "../controllers/UserController"
import {isAdmin} from "../middlewares/UserMiddemware"
const userRouter = express.Router()


userRouter.get("/users",  User.getAllUser)
userRouter.post("/register", User.createUser) //les artistes s’inscrivent eux mêmes via une route 
userRouter.post("/register_Manager",isAdmin, User.createUser)//les manager sont ajouté par l'admin
userRouter.delete("/user/:id",isAdmin, User.deleteUser) //L’admin peut supprimer n’importe quel compte.
userRouter.patch("/user/:id",User.updateUser)
userRouter.post("/ban_User/:id",isAdmin,User.banUser) //l'admin peut bannir un artiste ce qui l'empeche de poster un model

export default userRouter