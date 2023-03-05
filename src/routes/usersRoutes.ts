import express from "express"
import User from "../controllers/UserController"
import {isAdmin} from "../middlewares/UserMiddemware"
const userRouter = express.Router()


userRouter.get("/users",  User.getAllUser)
userRouter.post("/register",   User.createUser)
userRouter.delete("/user/:id",isAdmin, User.deleteUser)
userRouter.patch("/user/:id",User.updateUser)

export default userRouter