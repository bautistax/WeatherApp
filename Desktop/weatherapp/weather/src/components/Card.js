import React from "react";
import Loading from "./Loading/Loading.js";

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
                        <div className="mb-3 mx-auto bg-black text-lime-50">
                            <div className="row gap-0">
                                <div className="">
                                    <h3>{weather.name}</h3>
                                    <p>{date}</p>
                                    <h1>{(weather.main.temp - 273.15).toFixed(1)}°C</h1>
                                    <p><img src={urlIcon} alt="icon" />{weather.weather[0].description}</p>
                                    <img src="https://images.pexels.com/photos/2097616/pexels-photo-2097616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="city" />

                                </div>
                                <div className="">
                                    <div className="text-start mt-2">

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