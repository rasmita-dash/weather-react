import { createContext, useContext, useState } from "react";

const WeatherContext = createContext();

export const useWeatherContext =()=>{
    return useContext(WeatherContext);
}

export const WeatherProvider = ({children}) =>{
    const [cityName, setCityName] = useState(null);
    return (<WeatherContext.Provider value={{cityName, setCityName}}>
        {children}
    </WeatherContext.Provider>)
}