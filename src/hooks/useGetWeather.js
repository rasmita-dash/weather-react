import { useEffect } from "react";
import { useWeatherContext } from "../provider/weatherProvider";

const useGetWeather =  () =>{
    const weatherContext= useWeatherContext();
    useEffect(()=> {
        getWeather(weatherContext.cityName)
    }, [weatherContext.cityName]);

    const getWeather = async (cityName) => {
        let data = {};
        if (cityName){
            // data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.WEATHER_API_KEY}`);
            data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=22ff46392683d1c5140d03f5a1e9b318`);
            data= await data.json();
        }
        return data;
    }
}

export default useGetWeather
