import fs from "fs";
import { getUsersFromDatabase } from "./users.database.js";

const tweets = JSON.parse(fs.readFileSync("./src/database/json/tweets.json", "utf8")) || [];

export const createTweetOnDatabase = (tweetBody) => {
    const users = getUsersFromDatabase();
    const userAlreadyLogged = users.find((user) => user.username === tweetBody.username);
    if (userAlreadyLogged) {
        tweets.push({ ...tweetBody});
        fs.writeFileSync("./src/database/json/tweets.json", JSON.stringify(tweets));
    } else {
        throw new Error("UNAUTHORIZED");
    }

};

export const getTweetFromDatabase = () => {
    return [...tweets];
};