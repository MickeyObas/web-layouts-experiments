import sun from '../images/sun.png';

export default function SubForecastBox({day}){
    const dayToDisplay = day ? getReadableDay(day.date) : 'Day';
    return (
        <div className='sub-forecast-box'>
            <h5>{dayToDisplay}</h5>
            <img src={day ? day.day.condition.icon : sun} alt='sun icon'/>
            <h5>{day ? day.day.avgtemp_c : '0'}&deg;c</h5>
        </div>
    )
}

function getReadableDay(dateString){
    const date = new Date(dateString);
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return days[date.getDay()];
};