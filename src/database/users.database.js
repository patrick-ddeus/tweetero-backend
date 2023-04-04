import fs from "fs";

const users = JSON.parse(fs.readFileSync("./src/database/json/users.json", "utf8")) || [];

const createID = {
    _ID: 0,
    get ID() {
        return this._ID++;
    }
};

export const insertNewUser = (userBody) => {
    const registeredUser = users.find((user) => user.username === userBody.username);
    if (!registeredUser) {
        users.push({ ...userBody, id: createID.ID });
        fs.writeFileSync("./src/database/json/users.json", JSON.stringify(users));
    } else {
        throw new Error("User already registered!");
    }
};

export const getUsersFromDatabase = () => {
    return [...users];
};
