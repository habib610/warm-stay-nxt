import { bookingModel } from "@/models/booking-model";
import { hotelModel } from "@/models/hotel-model";
import { ratingModel } from "@/models/rating-model";
import { reviewModel } from "@/models/review-model";
import {
    replaceMongoIdInArray,
    replaceMongoIdInObject,
} from "@/utils/database-utils";

export const getAllHotels = async (destination, checkin, checkout) => {
    const regex = new RegExp(destination, "i");
    const hotelsByDestination = await hotelModel
        .find({ city: { $regex: regex } })
        .select([
            "thumbNailUrl",
            "name",
            "highRate",
            "lowRate",
            "city",
            "propertyCategory",
        ])
        .lean();

    let allHotels = hotelsByDestination;

    if (checkin && checkout) {
        allHotels = await Promise.all(
            allHotels.map(async (hotel) => {
                const found = await findBooking(hotel._id, checkin, checkout);
                if (found) {
                    hotel["isBooked"] = true;
                } else {
                    hotel["isBooked"] = false;
                }
                return hotel;
            })
        );
    }

    return replaceMongoIdInArray(allHotels);
};

async function findBooking(hotelId, checkin, checkout) {
    const matches = await bookingModel
        .find({ hotelId: hotelId.toString() })
        .lean();

    const found = matches.find((match) => {
        return (
            isDateInbetween(checkin, match.checkin, match.checkout) ||
            isDateInbetween(checkout, match.checkin, match.checkout)
        );
    });
    console.log(found);

    return found;
}

export async function getHotelById(hotelId, checkin, checkout) {
    const hotel = await hotelModel.findById(hotelId).lean();

    if (checkin && checkout) {
        const found = await findBooking(hotel._id, checkin, checkout);
        if (found) {
            hotel["isBooked"] = true;
        } else {
            hotel["isBooked"] = false;
        }
    }
    return replaceMongoIdInObject(hotel);
}

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
