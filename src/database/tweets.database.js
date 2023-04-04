import fs from "fs";
import UserDatabase from "./users.database.js";

const tweets = JSON.parse(fs.readFileSync("./src/database/json/tweets.json", "utf8")) || [];
const users = UserDatabase.getUsersFromDatabase();

export const createTweetOnDatabase = (tweetBody) => {
    const userAlreadyLogged = users.find((user) => user.username === tweetBody.username);
    if (userAlreadyLogged) {
        tweets.push({ ...tweetBody, avatar: userAlreadyLogged.avatar });
        fs.writeFileSync("./src/database/json/tweets.json", JSON.stringify(tweets));
    } else {
        throw new Error("UNAUTHORIZED");
    }
};

export const getTweetFromDatabase = () => {
    const lastTenTweets = tweets?.slice(-10);
    return [...lastTenTweets];
};

export const getTweetFromDatabaseByUsername = (username) => {
    const usernameTweets = tweets.filter((tweet) => tweet.username === username);
    return [...usernameTweets];
};