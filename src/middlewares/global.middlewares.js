export const validUser = (req, res, next) => {
    const { username, avatar } = req.body;
    if (!username || !avatar) {
        return res.status(400).send("Body must contains username and avatar fields!");
    }

    if (typeof username !== "string" || typeof avatar !== "string") {
        return res.status(400).send("Invalid data format, username and avatar must be string types!");
    }

    req.user = { username, avatar };
    return next();
};