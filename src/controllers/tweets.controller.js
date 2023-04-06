import * as TweetDatabase from "../database/tweets.database.js";

export const createTweet = (req, res) => {
    const { username, tweet } = req.tweet;

    try {
        TweetDatabase.createTweetOnDatabase({ username, tweet });
        res.status(201).send("OK");
    } catch (err) {
        res.status(401).send(err.message);
    }
};

export const getTweets = (req, res) => {
    const pageIndex = req.query.page;

    if (pageIndex < 1) {
        return res.status(400).send("Informe uma página válida!");
    }

    const tweets = TweetDatabase.getTweetFromDatabase(pageIndex);

    if (tweets.length === 0) {
        return res.status(200).send([]);
    }

    return res.status(200).send(tweets);
};

export const getTweetsByUsername = (req, res) => {
    const { username } = req.params;
    const tweets = TweetDatabase.getTweetFromDatabaseByUsername(username);
    res.status(200).send(tweets);
};