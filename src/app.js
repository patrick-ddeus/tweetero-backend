import express from "express";
import TweetRouter from "./routes/tweets.route.js";
import UserRouter from "./routes/users.route.js";
const app = express();
const porta = 5000;

app.use(express.json());

app.use("/tweets", TweetRouter);
app.use("/sign-up", UserRouter);

app.listen(porta, () => console.log(`
    Servidor iniciado na porta ${porta}
`));