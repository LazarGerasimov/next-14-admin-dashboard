import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q) => {

    const regex = new RegExp(q, "i"); //case insensitive

    try {
        connectToDB()
        const users = await User.find({ username: { $regex: regex } });
        return users;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch users");
    }
}