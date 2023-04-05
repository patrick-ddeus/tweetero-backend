import fs from "fs";
import * as UserDatabase from "./users.database.js";

const TWEETS_FILE_PATH = "./src/database/json/tweets.json";

let tweets = []

try {
    const tweetsData = fs.readFileSync(TWEETS_FILE_PATH, "utf8");
    tweets = JSON.parse(tweetsData);
} catch (err) {
    console.error(`Erro ao ler arquivo dos tweets: ${err.message}`);
}

export const createTweetOnDatabase = (tweetBody) => {
    const { username } = tweetBody;
    const users = UserDatabase.getUsersFromDatabase();

    const userAlreadyLogged = users.find((user) => user.username === username);

    if (!userAlreadyLogged) {
        throw new Error("UNAUTHORIZED");
    }

    const tweet = { ...tweetBody, avatar: userAlreadyLogged.avatar };
    tweets.push(tweet);
    fs.writeFileSync(TWEETS_FILE_PATH, JSON.stringify(tweets));

    return tweet;
};

export const getTweetFromDatabase = (pageIndex = 1) => {
    const PAGE_SIZE = 10;
    const startIndex = (pageIndex - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const tweetsToReturn = tweets.slice(startIndex, endIndex);

    return tweetsToReturn;
};

export const getTweetFromDatabaseByUsername = (username) => {
    const tweetsByUser = tweets.filter((tweet) => tweet.username === username);

    return tweetsByUser;
};