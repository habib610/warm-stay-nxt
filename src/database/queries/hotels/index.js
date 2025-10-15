import { hotelModel } from "@/models/hotel-model";
import { ratingModel } from "@/models/rating-model";
import { reviewModel } from "@/models/review-model";
import {
    replaceMongoIdInArray,
    replaceMongoIdInObject,
} from "@/utils/database-utils";

export const getAllHotels = async () => {
    let res = await hotelModel
        .find()
        .lean()
        .select([
            "thumbNailUrl",
            "name",
            "highRate",
            "lowRate",
            "city",
            "propertyCategory",
        ]);
    return replaceMongoIdInArray(res);
};

export const getHotelRatings = async (id) => {
    let res = await ratingModel.find({ hotelId: id }).lean();
    return replaceMongoIdInArray(res);
};

export const getHotelReviews = async (id) => {
    let res = await reviewModel.find({ hotelId: id }).lean();
    return res;
};

export const getHotelDetailsById = async (id) => {
    const hotel = await hotelModel.findById(id).lean();
    return replaceMongoIdInObject(hotel);
};
