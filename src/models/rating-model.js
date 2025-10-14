import mongoose, { Schema } from "mongoose";

const ratingSchma = new Schema({
    hotelId: {
        required: true,
        type: mongoose.Schema.ObjectId,
        ref: "hotels",
    },
    userId: {
        required: true,
        type: mongoose.Schema.ObjectId,
        ref: "users",
    },
    rating: {
        required: true,
        type: Number,
    },
});

export const ratingModel =
    mongoose.models.ratings ?? mongoose.model("ratings", ratingSchma);
