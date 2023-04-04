export const validUser = (req, res, next) => {
    const { username, avatar } = req.body;
    if (!username || !avatar) {
        return res.status(400).send("Todos os campos são obrigatórios!");
    }

    if (typeof username !== "string" || typeof avatar !== "string") {
        return res.status(400).send("Todos os campos são obrigatórios!");
    }

    req.user = { username, avatar };
    return next();
};

export const validTweet = (req, res, next) => {
    const { username, tweet } = req.body;

    if (!username || !tweet) {
        return res.status(400).send("Todos os campos são obrigatórios!");
    }

    if (typeof username !== "string" || typeof tweet !== "string") {
        return res.status(400).send("Todos os campos são obrigatórios!");
    }
    req.user = { username, tweet };
    return next();
};