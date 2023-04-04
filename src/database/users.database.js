import fs from "fs";
import User from "../models/user.model.cjs";

const USERS_FILE = "./src/database/json/users.json";

let users = [];

try {
    const usersData = fs.readFileSync(USERS_FILE, "utf8");
    users = JSON.parse(usersData);
} catch (err) {
    console.error(`Erro ao ler arquivo de usuários: ${err.message}`);
}

export const insertNewUser = (userBody) => {
    const { username, avatar } = userBody;

    if (users.some((user) => user.username === username)) {
        throw new Error("User already registered!");
    }

    const newUser = new User(username, avatar);
    users.push(newUser);

    fs.writeFileSync(USERS_FILE, JSON.stringify(users));

    return newUser;
};

export const getUsersFromDatabase = () => {
    return [...users];
};