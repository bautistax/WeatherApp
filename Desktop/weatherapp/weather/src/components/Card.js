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
                    <div className="mx-auto w-96 h-96 lg:w-120 lg:h-120 relative">
                    <img src="https://i.pinimg.com/564x/db/df/c2/dbdfc26503d1b6150202f1563142a02a.jpg" alt="city" className="rounded-s w-full h-full lg:w-full lg:h-full object-cover" />
                    <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
                        <div>
                            <h3 className="text-2xl font-semibold">{weather.name}</h3>
                            <p className="text-sm">{date}</p>
                            <h1 className="text-4xl">{(weather.main.temp - 273.15).toFixed(1)}°C</h1>
                            <p className="text-sm"><img src={urlIcon} alt="icon" />{weather.weather[0].description}</p>
                        </div>
                        <div className="card-body text-start mt-2">
                            <h5 className="text-sm">Max Temp: {(weather.main.temp_max - 273.15).toFixed(1)}°C</h5>
                            <h5 className="text-sm">Min Temp: {(weather.main.temp_min - 273.15).toFixed(1)}°C</h5>
                            <h5 className="text-sm">Feels Like: {(weather.main.feels_like - 273.15).toFixed(1)}°C</h5>
                            <h5 className="text-sm">Humidity: {weather.main.humidity}%</h5>
                            <h5 className="text-sm">Wind Speed: {weather.wind.speed}m/s</h5>
                        </div>
                        <hr className="my-2" />
                        <div className="mt-2 flex justify-between">
                            <div className="col-auto">
                                <p className="text-sm">{forecastDate3}h</p>
                                <p className="text-sm description"><img src={urlIcon3} alt="icon" />{forecast.list[1].weather[0].description}</p>
                                <p className="text-sm temperature">{(forecast.list[1].main.temp - 273.15).toFixed(1)} °C</p>
                            </div>
                            <div className="col-auto">
                                <p className="text-sm">{forecastDate6}h</p>
                                <p className="text-sm description"><img src={urlIcon6} alt="icon" />{forecast.list[2].weather[0].description}</p>
                                <p className="text-sm temperature">{(forecast.list[2].main.temp - 273.15).toFixed(1)} °C</p>
                            </div>
                            <div className="col-auto">
                                <p className="text-sm">{forecastDate9}h</p>
                                <p className="text-sm description"><img src={urlIcon9} alt="icon" />{forecast.list[3].weather[0].description}</p>
                                <p className="text-sm temperature">{(forecast.list[3].main.temp - 273.15).toFixed(1)} °C</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                
                
                ):(
                    <h2 className="text-center mx-auto text-lime-50">No data available</h2>
                )
            }

        </div>
    )
};

export default Card;