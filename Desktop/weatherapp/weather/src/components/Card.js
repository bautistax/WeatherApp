import React from "react";
import Loading from "./Loading/Loading.js";
import '../App.css';

const Card = ({loadingData, showData, weather, forecast}) => {

    let today = new Date();
    let day = today.getDay();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = day + '/' + month + '/' + year;

    let url = "";
    let urlIcon = "";


    if(loadingData){
        return <Loading />
    };

    if(showData){
        url = "http://openweathermap.org/img/w/";
        urlIcon = url + weather.weather[0].icon + ".png";
    };

    return (
        <div className="mt-5">

            {
                showData === true ? (
                    <div className="container">
                        <div className="card mb-3 mx-auto bg-black text-lime-50">
                            <div className="gap-0">
                                <div className="columns-md">
                                    <h3 className="card-title">{weather.name}</h3>
                                    <p className="card-date">{date}</p>
                                    <h1 className="card-temperature">{(weather.main.temp - 273.15).toFixed(1)}°C</h1>
                                    <p><img src={urlIcon} alt="icon" />{weather.weather[0].description}</p>
                                    <img src="https://i.pinimg.com/564x/88/b8/bb/88b8bb8183ba4e674a058a470a227aee.jpg" alt="city" className="rounded-s" />

                                </div>
                                <div className="columns-md">
                                    <div className="card-body text-start mt-2">
                                        <h5 className="card-text">Maximum temperature: {(weather.main.temp_max - 273.15).toFixed(1)}°C</h5>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                ):(
                    <h2 className="text-lime-50">No data available</h2>
                )
            }

        </div>
    )
};

export default Card;