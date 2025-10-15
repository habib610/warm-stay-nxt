import Image from "next/image";
import HotelSummaryInfo from "./HotelSummaryInfo";

const HotelCard = (props) => {
    return (
        <div className="flex gap-6 border border-gray/20 p-4 rounded-md">
            <Image
                src={props?.thumbNailUrl}
                className="max-h-[162px] max-w-[240px]"
                alt="hotel_thumbnail"
                width={200}
                height={175}
            />
            <HotelSummaryInfo
                name={props?.name}
                city={props.city}
                id={props.id}
                rate={parseInt((props.highRate + props?.lowRate) / 2)}
                property={props.propertyCategory}
                fromListPage={true}
            />
        </div>
    );
};

export default HotelCard;
