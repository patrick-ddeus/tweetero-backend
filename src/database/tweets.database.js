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

export const getTweetFromDatabase = (page_index) => {
    const PAGE_SIZE = 10;
    const startIndex = page_index === 1 ? tweets.length - PAGE_SIZE : (page_index - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const lastTweets = tweets?.slice(startIndex, endIndex);
    return [...lastTweets];
};

export const getTweetFromDatabaseByUsername = (username) => {
    const usernameTweets = tweets.filter((tweet) => tweet.username === username);
    return [...usernameTweets];
};