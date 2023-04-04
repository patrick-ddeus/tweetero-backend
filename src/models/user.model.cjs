/* eslint-disable no-undef */
const fs = require("fs");
const path = require("path");

class User {
    constructor(username, avatar) {
        this.username = username;
        this.avatar = avatar;
        this.id = User.createId();
    }

    static createId() {
        const usersFilePath = path.join(__dirname, "../database/json/users.json");
        let newUserId = 0;

        try {
            const fileContents = fs.readFileSync(usersFilePath, "utf8");
            const users = JSON.parse(fileContents);
            const lastUserId = users.length > 0 ? users[users.length - 1].id : 0;
            newUserId = lastUserId + 1;
        } catch (err) {
            fs.writeFileSync(usersFilePath, "[]");
        }

        return newUserId;
    }
}

module.exports = User;
