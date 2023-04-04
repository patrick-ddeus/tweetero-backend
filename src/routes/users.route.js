import express from "express";
import { validUser } from "../middlewares/global.middlewares.js";
import * as UserController from "../controllers/users.controller.js";
const router = express.Router();

router.post("/", validUser, UserController.createNewUser);

export default router;