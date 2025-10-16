"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Search = ({ fromList, destination, checkin, checkout }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const [searchTerm, setSearchTerm] = useState({
        destination: destination || "Puglia",
        checkin: checkin,
        checkout: checkout,
    });

    const [allowSearch, setAllowSearch] = useState(false);

    const handleSearch = () => {
        let params = new URLSearchParams(searchParams);
        params.set("destination", searchTerm.destination);

        if (searchTerm.checkin && searchTerm.checkout) {
            params.set("checkin", searchTerm.checkin);
            params.set("checkout", searchTerm.checkout);
        }
        if (pathname.includes("hotels")) {
            replace(`${pathname}?${params.toString()}`);
        } else {
            replace(`/hotels?${params.toString()}`);
        }
    };
    const onChangeInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        let state = { ...searchTerm, [name]: value };
        setSearchTerm(state);
        if (
            new Date(state.checkin).getTime() >
            new Date(state.checkout).getTime()
        ) {
            setAllowSearch(false);
        } else {
            setAllowSearch(true);
        }
    };
    return (
        <>
            <div className="lg:max-h-[250px] mt-6">
                <div id="searchParams" className={fromList && "!shadow-none"}>
                    <div>
                        <span>Destination</span>
                        <h4 className="mt-2">
                            <select
                                onChange={onChangeInput}
                                name="destination"
                                id="destination"
                                defaultValue={searchTerm.destination}
                            >
                                <option value="Puglia">Puglia</option>
                                <option value="Catania">Catania</option>
                                <option value="Palermo">Palermo</option>
                                <option value="Frejus">Frejus</option>
                                <option value="Paris">Paris</option>
                            </select>
                        </h4>
                    </div>

                    <div>
                        <span>Check in</span>
                        <h4 className="mt-2">
                            <input
                                onChange={onChangeInput}
                                type="date"
                                name="checkin"
                                id="checkin"
                                value={searchTerm.checkin}
                            />
                        </h4>
                    </div>

                    <div>
                        <span>Checkout</span>
                        <h4 className="mt-2">
                            <input
                                onChange={onChangeInput}
                                type="date"
                                name="checkout"
                                id="checkout"
                                value={searchTerm.checkout}
                            />
                        </h4>
                    </div>
                </div>
            </div>

            <button
                disabled={!allowSearch}
                onClick={handleSearch}
                className="search-btn"
            >
                🔍️ {fromList ? "Modify Search" : "Search"}
            </button>
        </>
    );
};

export default Search;
