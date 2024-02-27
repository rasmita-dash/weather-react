import './App.css';
import Search from './components/Search';
import WeatherInfo from './components/WeatherInfo';
import {WeatherProvider} from './provider/weatherProvider';

function App() {
  return (
    <WeatherProvider>
      <div className="App">
        <Search/>
        <WeatherInfo/>
      </div>
    </WeatherProvider>
  );
}

export default App;
