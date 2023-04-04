const tweetArray = [];

const createID = {
    _ID: 0,
    get ID() {
        return this._ID++;
    }
};

export const createTweetOnDatabase = (tweetBody) => {
    tweetArray.push({ ...tweetBody, id: createID.ID });
};

export const getTweetFromDatabase = () => {
    return [...tweetArray]
}