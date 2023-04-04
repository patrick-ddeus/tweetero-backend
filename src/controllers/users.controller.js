import * as UserDatabase from "../database/users.database";

export const createNewUser = (req, res) => {
    const user = req.user;

    if (user) {
        UserDatabase.insertNewUser(user);
        res.status(200).send("OK");
    }
};