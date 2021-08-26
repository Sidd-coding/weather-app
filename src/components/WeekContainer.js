import React from "react";
import Button from './Button';

const WeekContainer = (props) => {
    const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // const weather = props.fiveDay.list.filter(el => {
    //     let date = new Date();
    //     let currentDay = date.getDay();
    //     let day = new Date(el.dt * 1000).getDay();

    // });
    let weather = props.fiveDay?.list?.filter(
        (e, index) => {
            let date = new Date();
            let day = date.getDate();
            let month = date.getMonth();
            let year = date.getFullYear();

            return index === 0 ||
                new Date(e.dt_txt).getTime() === new Date(`${year}-${month + 1}-${day + 1} 00:00:00`).getTime() ||
                new Date(e.dt_txt).getTime() === new Date(`${year}-${month + 1}-${day + 2} 00:00:00`).getTime() ||
                new Date(e.dt_txt).getTime() === new Date(`${year}-${month + 1}-${day + 3} 00:00:00`).getTime() ||
                new Date(e.dt_txt).getTime() === new Date(`${year}-${month + 1}-${day + 4} 00:00:00`).getTime()
        }
    );

    return (
        <div className="container">
            {props.fiveDay?.list?.length > 0 ? <div>{weather.map((el, index) => (
                <div className="card-body text-center" key={index}>
                    <span className="card-date"> {dayName[new Date(el.dt * 1000).getDay()]} </span>

                    <span className="card-weather-emoji" role="img" aria-label="broken clouds" title="broken clouds">
                        {
                            el.weather[0].description === "moderate rain" ?
                                <ion-icon name="rainy-outline"></ion-icon> :
                                el.weather[0].description === "light rain" ?
                                    <ion-icon name="thunderstorm-outline"></ion-icon> :
                                    el.weather[0].description === "overcast clouds" ?
                                        <ion-icon name="cloudy-outline"></ion-icon> :
                                        el.weather[0].description === "broken clouds" ?
                                            <ion-icon name="cloud-outline"></ion-icon> :
                                            "No Icon"
                        }
                    </span>
                    <span className="card-degree">{Math.round(el.main.temp)} °C </span>
                </div>

            ))}</div>
                : <Button Main={props.fiveDayhandler} checked={props.checked} />
            }
        </div >

    );
}

export default WeekContainer;