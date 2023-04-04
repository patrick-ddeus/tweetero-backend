import express from "express";
import * as TweetController from "../controllers/tweets.controller.js";

const router = express.Router()

router.post("/", TweetController.createTweet)
router.get("/", TweetController.getTweets)

export default router