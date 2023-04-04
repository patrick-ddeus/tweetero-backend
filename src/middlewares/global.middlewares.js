export const validUser = (req, res, next) => {
    const { username, avatar } = req.body;
    if (!username || !avatar) {
        return res.status(400).send({ message: "Body must contains username and avatar fields!" });
    }

    if (typeof username !== "string" || typeof avatar !== "string") {
        return res.status(400).send({ message: "Invalid data format, username and avatar must be string types!" });
    }

    req.user = { username, avatar };
    return next();
};

export const validTweet = (req, res, next) => {
    const { username, tweet } = req.body;

    if (!username || !tweet) {
        return res.status(400).send("Body must contains username and tweet fields!");
    }

    if (typeof username !== "string" || typeof tweet !== "string") {
        return res.status(400).send({ message: "Invalid data format, username and tweet must be string types!" });
    }
    req.user = { username, tweet };
    return next();
};