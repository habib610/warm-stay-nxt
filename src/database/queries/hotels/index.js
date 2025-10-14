import { hotelModel } from "@/models/hotel-model";
import { replaceMongoIdInArray } from "@/utils/database-utils";

export const getAllHotels = async () => {
    let res = await hotelModel.find().lean();
    return replaceMongoIdInArray(res);
};
