import express from "express";
import from "../"

const router = express.Router()

router.route("/")
.get(controllerPackage.getPackages)
.post(controllerPackage.postPackage)

router.route("/:id")
.put(controllerPackage.putPackage)
.delete(controllerPackage.deletePackage)

export default router