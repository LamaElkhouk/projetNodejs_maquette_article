import express from "express"
import userRoute from "../routes/usersRoutes"
import connexionRouter from "../routes/connexionRouter"
import modelRouter from "../routes/modelRouter"
import approvalRouter from "../routes/approvalRouter"
const router = express.Router()


router.use(userRoute)
router.use(connexionRouter)
router.use(modelRouter)
router.use(approvalRouter)

export default router