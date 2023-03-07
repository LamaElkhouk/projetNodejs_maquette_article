import express from "express"
import Approval from "../controllers/ApprovalController"
import {isManager} from "../middlewares/UserMiddemware"
const approvalRouter = express.Router()


approvalRouter.get("/approvals",  Approval.getAllApproval)
approvalRouter.post("/approval", isManager,  Approval.createApproval) //seul les managers peuvent créer des approbations
approvalRouter.delete("/approval/:id",isManager, Approval.deleteApproval) //un manager peut supprimer sont approbation
approvalRouter.patch("/approval/:id",isManager,Approval.updateApproval) //un manager peut modifier sont approbation

export default approvalRouter