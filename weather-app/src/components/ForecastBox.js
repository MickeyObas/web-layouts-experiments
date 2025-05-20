import sun from '../images/sun.png';
import SubForecastBox from './SubForecastBox';


export default function ForecastBox({weather}){

    return (
        <div id='forecastDiv'>
            <div id='mainForecastBox'>
                <div id='forecastIcon'>
                    <img src={(weather && weather.current.condition.icon)??sun} alt='sun icon'/>
                </div>
                <div id='forecastDetails'>
                    {(weather && (
                    <div>
                        <p id='day'>Today</p>
                        <h1 id='location'>{weather.location.name}</h1>
                        <p id='temperature'>Temperature: {weather.current.temp_c}&deg;c</p>
                        <p id='mini-description'>{weather.current.condition.text}</p>
                    </div> 
                    ))??
                    <div>
                        <p id='day'>Today</p>
                        <h1 id='location'>Location</h1>
                        <p id='temperature'>Temperature: Temperature</p>
                        <p id='mini-description'>Description: Description</p>
                    </div> 
                    }
                </div>
            </div>
            {weather ? (
                <div id='subForecastDiv'>
                {weather.forecast.forecastday.slice(1,5).map((forecastday, index) => {
                    return <SubForecastBox key ={index} day={forecastday}/>
                })}
            </div>
            ) : (
                <div id='subForecastDiv'>
                    <SubForecastBox />
                    <SubForecastBox />
                    <SubForecastBox />
                    <SubForecastBox />
                </div>
            )}
      </div>
    )
}