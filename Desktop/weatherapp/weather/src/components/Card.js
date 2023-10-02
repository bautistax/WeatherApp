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
    let urlIcon3="";
    let urlIcon6 = "";
    let urlIcon9 = "";

    let forecastDate3 = "";
    let forecastDate6 = "";
    let forecastDate9 = "";

    if(loadingData){
        return <Loading />
    };

    if(showData){
        url = "http://openweathermap.org/img/w/";
        urlIcon = url + weather.weather[0].icon + ".png";

        urlIcon3 = url + forecast.list[1].weather[0].icon + ".png";
        urlIcon6 = url + forecast.list[2].weather[0].icon + ".png";
        urlIcon9 = url + forecast.list[3].weather[0].icon + ".png";

        forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + "/" + forecast.list[1].dt_txt.substring(5, 7) + "/" + forecast.list[1].dt_txt.substring(0, 4) + " " + forecast.list[1].dt_txt.substring(11, 13);
        forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + "/" + forecast.list[2].dt_txt.substring(5, 7) + "/" + forecast.list[2].dt_txt.substring(0, 4) + " " + forecast.list[2].dt_txt.substring(11, 13);
        forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + "/" + forecast.list[3].dt_txt.substring(5, 7) + "/" + forecast.list[3].dt_txt.substring(0, 4) + " " + forecast.list[3].dt_txt.substring(11, 13);

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
                                        <h5 className="card-text">Maximum Temperature: {(weather.main.temp_max - 273.15).toFixed(1)}°C</h5>
                                        <h5 className="card-text">Minimum Temperature: {(weather.main.temp_min - 273.15).toFixed(1)}°C</h5>
                                        <h5 className="card-text">Feels Like: {(weather.main.feels_like - 273.15).toFixed(1)}°C</h5>
                                        <h5 className="card-text">Humidity: {weather.main.humidity}%</h5>
                                        <h5 className="card-text">Wind Speed: {weather.wind.speed}m/s</h5>
                                    </div>
                                    <hr/>

                                    <div className="mt-4">
                                        <div className="col-auto">
                                            <p>{forecastDate3}h</p>
                                            <p className="description"><img src={urlIcon3} alt="icon" />{forecast.list[1].weather[0].description}</p>
                                            <p className="temperature">{(forecast.list[1].main.temp - 273.15).toFixed(1)} °C</p>
                                        </div>

                                        <div className="col-auto">
                                            <p>{forecastDate6}h</p>
                                            <p className="description"><img src={urlIcon6} alt="icon" />{forecast.list[2].weather[0].description}</p>
                                            <p className="temperature">{(forecast.list[2].main.temp - 273.15).toFixed(1)} °C</p>
                                        </div>

                                        <div className="col-auto">
                                            <p>{forecastDate9}h</p>
                                            <p className="description"><img src={urlIcon9} alt="icon" />{forecast.list[3].weather[0].description}</p>
                                            <p className="temperature">{(forecast.list[3].main.temp - 273.15).toFixed(1)} °C</p>
                                        </div>

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