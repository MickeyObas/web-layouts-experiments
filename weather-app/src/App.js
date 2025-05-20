import './App.css';
import CityInput from './components/CityInput';
import ForecastBox from './components/ForecastBox';

import { useState } from 'react';


function App() {

  const [query, setQuery] = useState(null);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = '805c4656da8040839e8115402242307';

  function handleChange(e){
    setQuery(e.target.value);
  }

  function handleClick(){
    fetchWeather();
  }

  function handleKeyDown(e){
    if(query && e.key === 'Enter'){
      fetchWeather();
    }
  }

  const fetchWeather = async () =>  {
    setLoading(true);
    setError(null)
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${query}&days=5&aqi=no&alerts=no`);

      if(!response.ok){
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      setWeather(data);
    } catch(err){
      console.log(err);
      setError(err.message);
    } finally{
      setLoading(false);
    }
  }

  return (
    <>
      <CityInput
        onChange={handleChange}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
       />
       {loading && <p style={{'textAlign':'center'}}>Loading...</p>}
       {error && <p style={{color:'red', textAlign:'center'}}>Error: {error}</p>}
      <ForecastBox 
        weather={weather}
      />
    </>
  )
}

export default App;
