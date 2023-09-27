import React, { useState } from "react";

const WeatherPanel = () => {

    const urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=798e111e9f5e90920f4ea6a4408f4f80&lang=en";
    const cityUrl = "&q=";

    const urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=798e111e9f5e90920f4ea6a4408f4f80&lang=en";

    const [ weather, setWeather ] = useState([]);
    const [forecast, setForecast ] = useState([]);
};

export default WeatherPanel;