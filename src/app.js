import express from "express";
import tweetRouter from "./routes/tweets.route.js";

const app = express();
const porta = 5000;

app.use(express.json());
app.use("/tweets", tweetRouter);
app.listen(porta, () => console.log(`
    Servidor iniciado na porta ${porta}
`));