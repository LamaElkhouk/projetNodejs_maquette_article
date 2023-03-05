import express from "express"
import userRoute from "../routes/usersRoutes"
import connexionRouter from "../routes/connexionRouter"
const router = express.Router()


router.use(userRoute)
router.use(connexionRouter)



export default router