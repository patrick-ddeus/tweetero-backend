import express from "express";
import TweetRouter from "./routes/tweets.route.js";

const app = express();
const porta = 5000;

app.use(express.json());
app.use("/tweets", TweetRouter);
app.listen(porta, () => console.log(`
    Servidor iniciado na porta ${porta}
`));