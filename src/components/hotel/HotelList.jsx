import { getAllHotels } from "@/database/queries/hotels";
import HotelCard from "./HotelCard";

const HotelList = async ({ destination, checkin, checkout }) => {
    const hotels = await getAllHotels(destination, checkin, checkout);
    return (
        <div className="col-span-9">
            <div className="space-y-4">
                {hotels.map((item) => (
                    <HotelCard
                        key={item.id}
                        {...item}
                        checkin={checkin}
                        checkout={checkout}
                    />
                ))}
            </div>
        </div>
    );
};

export default HotelList;
