import * as UserDatabase from "../database/users.database.js";

export const createNewUser = (req, res) => {
    const user = req.user;

    try {
        if (user) {
            UserDatabase.insertNewUser(user);
            res.status(201).send("OK");
        }
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};
