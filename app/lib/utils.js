import mongoose from "mongoose"

export const connectToDB = async () => {

    const connection = {}

    try {
        if (connection.isConnected) return;
        const db = await mongoose.connect(`${process.env.NEXT_MONGO_DB_CONNECTION_STRING}`);
        connection.isConnected = db.connections[0].readyState
    } catch (error) {
        throw new Error(error);
    }
}