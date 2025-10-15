import Gallery from "@/components/hotel/details/Gallery";
import Overview from "@/components/hotel/details/Overview";
import Summary from "@/components/hotel/details/Summary";
import { getHotelDetailsById } from "@/database/queries/hotels";

const HotelDetailsPage = async ({ params: { id } }) => {
    let res = await getHotelDetailsById(id);
    return (
        <>
            <Summary {...res} />
            <Gallery gallery={res?.gallery} />
            <Overview overview={res?.shortDescription} />
        </>
    );
};

export default HotelDetailsPage;
