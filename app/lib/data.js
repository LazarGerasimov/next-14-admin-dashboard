import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {

    const regex = new RegExp(q, "i"); //case insensitive

    const item_per_page = 4;

    try {
        connectToDB();
        const count = await User.find({ username: { $regex: regex } }).count(); // get total number of uers
        const users = await User.find({ username: { $regex: regex } }).limit(item_per_page).skip(item_per_page * (page - 1)); // search query + pagination
        return { count, users };
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch users");
    }
}