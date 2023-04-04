import * as TweetDatabase from "../database/tweets.database.js";

export const createTweet = (req, res) => {
    const { username, tweet } = req.body

    if(!username || !tweet){
        return res.status(400).send("Body must contains username and tweet fields!")
    }

    TweetDatabase.createTweetOnDatabase({username, tweet})

    res.status(200).send({username, tweet})
};

export const getTweets = (req, res) => {
    const tweets = TweetDatabase.getTweetFromDatabase()
    if(tweets.length === 0){
        res.status(500).send({"message":"Theres no tweets"})
    }

    res.status(200).send(tweets)
}