import React, { useEffect, useState } from 'react'
import { useWeatherContext } from '../provider/weatherProvider';
import useGetWeather from '../hooks/useGetWeather';

const WeatherInfo = () => {
    const weatherContext=useWeatherContext();
    // const [weatherInfo, setWeatherInfo]=useState(null);
    let data = useGetWeather(weatherContext.cityName);
    // setWeatherInfo(data);
    console.log("From WeatherInfo",weatherContext.cityName)
  return (
    <div><h1>WeatherInfo</h1>
    {/* {weatherInfo.map ((w)=>{return})} */}
    </div>
  )
}

export default WeatherInfo