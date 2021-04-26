// index.ts contains mongo process.env vars
var User = require("@/../../src/Models/User");
import IUser from '@/../../src/types/interfaces';

const logTag = "[MongoAPI.ts]";

exports.GetUserList = async () => {
    console.log(`${logTag} GetUserList called`);
    const rawsult = await User.find({});
    return rawsult;
}

exports.AddUser = async (user: IUser) => {
    console.log(`${logTag} AddUser called`);
    const rawsult = await User.create({
        userId: user.userId,
        name: user.name
    });
    return rawsult;
}