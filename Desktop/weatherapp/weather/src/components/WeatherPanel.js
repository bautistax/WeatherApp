import React, { useState } from "react";
import axios from "axios";
import Form from "./Form";
import Card from "./Card";


const WeatherPanel = () => {

    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=798e111e9f5e90920f4ea6a4408f4f80&lang=en";
    let cityUrl = "&q=";

    let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=798e111e9f5e90920f4ea6a4408f4f80&lang=en";

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState("");

    const getLocation = async (loc) => {
        setLoading(true);
        setLocation(loc);

        //weather
         urlWeather = urlWeather + cityUrl + loc;

        // Utiliza axios para realizar la solicitud HTTP
       await axios.get(urlWeather)
            .then((response) => {
                // Verifica si la respuesta no es exitosa y lanza un error si es necesario
                if (!response.data) {
                    throw new Error('No se encontraron datos de clima');
                }

                // Procesa los datos de clima
                const weatherData = response.data;
                console.log(weatherData);

                // Actualiza el estado con los datos de clima
                setWeather(weatherData);
            }).catch((error) => {
                console.error(error);

                // Realiza las acciones necesarias cuando se produce un error
                setLoading(false);
                setShow(false);
            });

        //forecast

        urlForecast = urlForecast + cityUrl + loc;

        await axios.get(urlForecast)
            .then((response) => {
                // Verifica si la respuesta no es exitosa y lanza un error si es necesario
                if (!response.data) {
                    throw new Error('No se encontraron datos de clima');
                }

                // Procesa los datos de clima
                const forecastData = response.data;
                console.log(forecastData);

                // Actualiza el estado con los datos de clima
                setForecast(forecastData);

                setLoading(false);
                setShow(true);
            }).catch((error) => {
                console.error(error);

                // Realiza las acciones necesarias cuando se produce un error
                setLoading(false);
                setShow(false);
            });
    };

    return (
        <React.Fragment>
            <Form newLocation = {getLocation} />
            <Card 
            showData={show} 
            loadingData={loading} 
            weather={weather}
            forecast={forecast}
            />
        </React.Fragment>
    );
};

export default WeatherPanel;