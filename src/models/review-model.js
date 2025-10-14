import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema({
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
    review: {
        required: true,
        type: Number,
    },
});

export const reviewModel =
    mongoose.models.reviews ?? mongoose.model("reviews", reviewSchema);
