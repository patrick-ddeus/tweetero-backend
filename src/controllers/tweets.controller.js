import * as DataBase from "../database/db.js";

export const createTweet = (req, res) => {
    const { username, tweet } = req.body

    if(!username || !tweet){
        return res.status(400).send("UNAUTHORIZED")
    }

    DataBase.createTweetOnDatabase({username, tweet})

    res.status(200).send({username, tweet})
};

export const getTweets = (req, res) => {
    const tweets = DataBase.getTweetFromDatabase()
    if(tweets.length === 0){
        res.status(400).send({"message":"Theres no tweets"})
    }

    res.status(200).send(tweets)
}