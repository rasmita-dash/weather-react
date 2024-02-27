import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useWeatherContext } from "../provider/weatherProvider";

const Search = ()=>{
    let searchText = useRef(null);
    const weatherContext = useWeatherContext();

    const handleSearch = ()=>{
        weatherContext.setCityName(searchText.current.value);
    }
    return (<div className="search-page">
        <input type="search" ref={searchText}/>
        <button onClick={handleSearch}><FaSearch/></button>
    </div>)
}
export default Search