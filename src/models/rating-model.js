import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";

const ratingSchma = new Schema({
    hotelId: {
        required: true,
        type: ObjectId,
        ref: "hotels",
    },
    userId: {
        required: true,
        type: ObjectId,
        ref: "users",
    },
    rating: {
        required: true,
        type: Number,
    },
});

export const ratingModel =
    mongoose.models.ratings ?? mongoose.model("ratings", ratingSchma);
