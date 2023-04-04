/* eslint-disable no-undef */
import express from "express";
import cors from "cors";
import TweetRouter from "./routes/tweets.route.js";
import UserRouter from "./routes/users.route.js";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

app.use("/tweets", TweetRouter);
app.use("/sign-up", UserRouter);

app.listen(process.env.PORT, () => console.log(`
    Servidor iniciado em https://${process.env.HOST}:${process.env.PORT}
`));