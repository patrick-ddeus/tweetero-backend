import express from "express";
import { validTweet } from "../middlewares/global.middlewares.js";
import * as TweetController from "../controllers/tweets.controller.js";

const router = express.Router()

router.post("/", validTweet, TweetController.createTweet)
router.get("/", TweetController.getTweets)

export default router