import * as TweetDatabase from "../database/tweets.database.js";

export const createTweet = (req, res) => {
    const { username, tweet } = req.body;
    try {
        TweetDatabase.createTweetOnDatabase({ username, tweet });
        res.status(201).send("OK");
    } catch (err) {
        res.status(401).send(err.message);
    }
};

export const getTweets = (req, res) => {
    const tweets = TweetDatabase.getTweetFromDatabase();

    if (tweets.length === 0) {
        return res.status(400).send([]);
    }

    res.status(200).send(tweets);
};

export const getTweetsByUsername = (req, res) => {
    const username = req.params.username;
    const tweets = TweetDatabase.getTweetFromDatabaseByUsername(username);
    if (tweets.length > 0) {
        res.status(200).send(tweets);
    } else {
        res.status(200).send([]);
    }
};