const users = [];

const createID = {
    _ID: 0,
    get ID() {
        return this._ID++;
    }
};

export const insertNewUser = (userBody) => {
    users.push({ ...userBody, id: createID.ID });
};

export const getUsersFromDatabase = () => {
    return [...tweetArray];
};