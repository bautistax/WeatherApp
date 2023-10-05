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
        <div className="">

        {showData === true ? (
            <div className="mx-auto w-full lg:w-96 h-auto relative">
                <img src="https://i.pinimg.com/564x/66/41/e6/6641e62d7476ae21918c93fe9a39bccd.jpg" alt="city" className="rounded-2xl w-full h-full lg:w-full lg:h-full object-cover" />
                <div className="absolute inset-0 flex flex-col justify-between p-4 text-slate-300">
                    <div>
                        <h3 className="text-5xl font-semibold">{weather.name}</h3>
                        <p className="text-base">{date}</p>
                        <h1 className="text-6xl">{(weather.main.temp - 273.15).toFixed(1)}°C</h1>
                        <p className="text-xl"><img src={urlIcon} alt="icon" />{weather.weather[0].description}</p>
                    </div>
                    <div className="card-body text-start lg:-mt-32">
                        <h5 className="text-xl">Max Temp: {(weather.main.temp_max - 273.15).toFixed(1)}°C</h5>
                        <h5 className="text-xl">Min Temp: {(weather.main.temp_min - 273.15).toFixed(1)}°C</h5>
                        <h5 className="text-xl">Feels Like: {(weather.main.feels_like - 273.15).toFixed(1)}°C</h5>
                        <h5 className="text-xl">Humidity: {weather.main.humidity}%</h5>
                        <h5 className="text-xl">Wind Speed: {weather.wind.speed}m/s</h5>
                    </div>
                    <hr className="lg:-mt-28" />
                    <div className="lg:-mt-28 flex flex-col lg:flex-row justify-between">
                        <div className="col-auto mb-4 lg:mb-0">
                            <p className="text-sm">{forecastDate3}h</p>
                            <p className="text-sm description"><img src={urlIcon3} alt="icon" />{forecast.list[1].weather[0].description}</p>
                            <p className="text-sm temperature">{(forecast.list[1].main.temp - 273.15).toFixed(1)} °C</p>
                        </div>
                        <div className="col-auto mb-4 lg:mb-0">
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
        ) : (
            <h2 className="text-center mx-auto text-lime-50">No data available</h2>
        )}
    
    </div>
    
    )
};

export default Card;