import Link from "next/link";
import HotelRatingNumber from "./HotelRatingNumber";
import Reviews from "./Reviews";

const HotelSummaryInfo = ({
    fromListPage,

    name,
    city,
    property,
    rate,
    id,
}) => {
    return (
        <>
            <div className={fromListPage ? "flex-1" : "flex-1 container"}>
                <h2
                    className={
                        fromListPage
                            ? "font-bold text-lg"
                            : "font-bold text-2xl"
                    }
                >
                    {name}
                </h2>
                <p>📍 {city}</p>
                <div className="flex gap-2 items-center my-4">
                    <HotelRatingNumber id={id} />

                    <Reviews id={id} />
                </div>
            </div>

            <div className="flex flex-col gap-2 items-end justify-center">
                <h2 className="text-2xl font-bold text-right">${rate}/night</h2>
                <p className=" text-right">Per Night for 1 Rooms</p>
                {fromListPage ? (
                    <Link className="btn-primary " href={`/hotels/${id}`}>
                        Details
                    </Link>
                ) : (
                    <button className="btn-primary ">Book</button>
                )}
            </div>
        </>
    );
};

export default HotelSummaryInfo;
