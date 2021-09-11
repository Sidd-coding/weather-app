import React from 'react';



const Weathercard = (props) => {
    console.log("test", props);
    return (
        <div className="weather-wrapper" >
            <div className={props.checked ? "weather-card-grey" : "weather-card"}>

                <span className="weather-icon sun" role="img" aria-label="broken clouds" title="broken clouds">
                    {
                        props.season.weather[0]?.description === "haze" ?
                            <ion-icon name="partly-sunny-outline"></ion-icon> :
                            props.season.weather[0]?.description === "sunny-outline" ?
                                <ion-icon name="sunny-outline"></ion-icon> :
                                props.season.weather[0]?.description === "rain" ?
                                    <ion-icon name="rainy-outline"></ion-icon> :
                                    props.season.weather[0]?.description === "mist" ?
                                        <ion-icon name="cloud-outline"></ion-icon> :
                                        "no icon"
                    }
                </span>

                <h1 className={props.checked ? "tempSize" : "temp"}>
                    {Math.trunc(props.season.main?.temp)}°C

                </h1>
                <p className={props.checked ? "citySize" : "city"}>{props.season.name}</p>
            </div>
        </div >
    );
}

export default Weathercard;