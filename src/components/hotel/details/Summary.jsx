import HotelSummaryInfo from "../HotelSummaryInfo";

const Summary = (props) => {
    return (
        <section className="py-4 mt-[100px] ">
            <div className="flex container">
                <HotelSummaryInfo
                    city={props.city}
                    id={props.id}
                    name={props.name}
                    source="details"
                    rate={Math.ceil((props.lowRate + props.highRate) / 2)}
                />
            </div>
        </section>
    );
};

export default Summary;
