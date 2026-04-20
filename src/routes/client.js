import clientController from "../controllers/client.js"
import express from "express"

const router = express.Router()

router.route("/")
.get(clientController.getClients)

router.route("/:id")
.put(clientController.modifyClient)
.delete(clientController.deleteClient)

export default router
