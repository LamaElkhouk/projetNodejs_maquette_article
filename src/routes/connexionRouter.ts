import express from "express"
import Connexion from "../controllers/ConnexionController"
const connexionRouter = express.Router()


connexionRouter.post("/login",  Connexion.login)
connexionRouter.post("/logout",   Connexion.logout)

export default connexionRouter