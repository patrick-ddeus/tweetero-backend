/* eslint-disable no-undef */
import * as UsersDatabase from "../database/users.database.js"

class User {
    constructor(username, avatar) {
        this.username = username;
        this.avatar = avatar;
        this.id = User.createId();
    }

    static createId() {
        let newUserId = 0;
        const users = UsersDatabase.getUsersFromDatabase();
        const lastUserId = users.length > 0 ? users[users.length - 1].id : 0;
        
        newUserId = lastUserId + 1;

        return newUserId;
    }
}

export default User
