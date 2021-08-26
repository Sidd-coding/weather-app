import React from "react";



const Button = (props) => {
    return (
        <div>
            <button className={props.checked ? "btn-grey" : "btn-fetch"} onClick={props.Main} >
                Load 5 Day Weather Forecast
            </button>
        </div >
    );
}

export default Button;