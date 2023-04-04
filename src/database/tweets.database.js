import fileSystem from "fs";
import { getUsersFromDatabase } from "./users.database";
const tweets = JSON.parse(fs.readFileSync("./src/database/json/tweets.json", "utf8")) || [];;

const createID = {
    _ID: 0,
    get ID() {
        return this._ID++;
    }
};

export const createTweetOnDatabase = (tweetBody) => {
    const users = getUsersFromDatabase()
    const userAlreadyLogged = users.find((user) => user.username === tweetBody.username)
    if(userAlreadyLogged){
        tweets.push({ ...tweetBody, id: createID.ID });
        fileSystem.writeFileSync("./src/database/json/tweets.json", JSON.stringify(tweets));
    }else{
        throw new Error("User must be logged before tweet!")
    }
    
};

export const getTweetFromDatabase = () => {
    return [...tweets]
}