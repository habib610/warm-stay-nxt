import { getAllHotels } from "@/database/queries/hotels";
import HotelCard from "./HotelCard";

const HotelList = async () => {
    const hotels = await getAllHotels();
    return (
        <div className="col-span-9">
            <div className="space-y-4">
                {hotels.map((item) => (
                    <HotelCard key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
};

export default HotelList;
