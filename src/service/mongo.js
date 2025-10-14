import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        let connection = await mongoose.connect(
            process.env.MONGODB_CONNECTION_URI
        );
        console.log("DB Connected");
        return connection;
    } catch (error) {
        console.log("Connection Failed,", error);
    }
};
