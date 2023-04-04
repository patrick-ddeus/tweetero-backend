/* eslint-disable no-undef */
const fs = require("fs");
const path = require("path");

class User {
    constructor(username, avatar) {
        this.username = username;
        this.avatar = avatar;
        this.id = User.createId();
    }

    static createId = () => {
        const usersFilePath = path.join(__dirname, "../database/json/users.json");
        try {
            const fileContents = fs.readFileSync(usersFilePath);
            const users = JSON.parse(fileContents);

            const lastUserId = users.length > 0 ? users[users.length - 1].id : 0;
            const newUserId = lastUserId + 1;

            return newUserId;
        } catch (err) {
            fs.writeFileSync(usersFilePath, []);
            return 0;
        }
    };
}

module.exports = User;