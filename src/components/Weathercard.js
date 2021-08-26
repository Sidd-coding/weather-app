import React from 'react';



const Weathercard = (props) => {
    console.log(props);
    return (
        <div className="weather-wrapper" >
            <div className={props.checked ? "weather-card-grey" : "weather-card"}>
                <div className="weather-icon sun">

                </div>
                <h1 className={props.checked ? "tempSize" : "temp"}>
                    {Math.trunc(props.season.main?.temp)}°C

                </h1>
                <p className={props.checked ? "citySize" : "city"}>{props.season.name}</p>
            </div>
        </div >
    );
}

export default Weathercard;