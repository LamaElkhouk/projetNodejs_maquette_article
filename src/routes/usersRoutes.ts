import express from "express"
import User from "../controllers/UserController"
const userRouter = express.Router()


userRouter.get("/users",  User.getAllUser)
userRouter.post("/register",   User.createUser)
userRouter.delete("/user/:id",User.deleteUser)
userRouter.patch("/user/:id",User.updateUser)

export default userRouter