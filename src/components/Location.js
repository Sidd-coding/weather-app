import React from "react";
import { BiMapPin } from "react-icons/bi";

const Location = () => {
    return (
        <div className="">
            <h1 className="text-center hold">
                <span aria-label="Lucknow" title="Luckow">
                    <BiMapPin />
                </span>
                <span className="today-city">Lucknow</span>
            </h1>
        </div>
    );
}

export default Location;