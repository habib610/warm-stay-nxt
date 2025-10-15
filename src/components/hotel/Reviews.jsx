import { getHotelReviews } from "@/database/queries/hotels";

export default async function Reviews({ id }) {
    let res = await getHotelReviews(id);
    return <div> {res.length} Reviews</div>;
}
