import fs from "fs";
import User from "../models/user.model.cjs";

class UserDatabase {
    constructor() {
        this.users = JSON.parse(fs.readFileSync("./src/database/json/users.json", "utf8")) || [];
    }

    insertNewUser = (userBody) => {
        const registeredUser = this.users.find((user) => user.username === userBody.username);
        if (!registeredUser) {
            const createdUser = new User(userBody.username, userBody.avatar);
            this.users.push(createdUser);
            fs.writeFileSync("./src/database/json/users.json", JSON.stringify(this.users));
        } else {
            throw new Error("User already registered!");
        }
    };

    getUsersFromDatabase = () => {
        return [...this.users];
    };
    
}

export default new UserDatabase