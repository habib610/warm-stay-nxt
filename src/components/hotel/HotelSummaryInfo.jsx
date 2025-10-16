import Link from "next/link";
import HotelRatingNumber from "./HotelRatingNumber";
import Reviews from "./Reviews";

const HotelSummaryInfo = ({
    fromListPage,
    checkin,
    checkout,
    isBooked,
    name,
    city,
    property,
    rate,
    id,
}) => {
    let params = "";
    if (checkin && checkout) {
        params = `?checkin=${checkin}&checkout=${checkout}`;
    }
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
                    {isBooked && <span>Sold Out</span>}
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
                    <Link
                        href={isBooked ? "#" : `/hotels/${id}/payment${params}`}
                        className={isBooked ? "btn-disabled" : "btn-primary"}
                    >
                        Book
                    </Link>
                )}
            </div>
        </>
    );
};

export default HotelSummaryInfo;
