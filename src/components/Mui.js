import React from "react";
import Location from "./Location";

const Mui = (props) => {

    return (
        <div className="right">
            <div className="mr_4">
                <div>
                    <label className="switch">
                        <input type="checkbox"
                            checked={props.checked}
                            onChange={props.muiColor}
                        ></input>
                        <span className="slider"></span>
                    </label>
                </div>
                <div>
                    <Location />
                </div>
            </div>
        </div>
    );
}

export default Mui;