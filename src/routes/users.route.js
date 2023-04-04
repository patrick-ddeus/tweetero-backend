import express from "express";
import { validUser } from "../middlewares/global.middlewares";
import * as UserController from "../controllers/users.controller";
const router = express.Router()

router.post("/", validUser, UserController.createNewUser)

export default router