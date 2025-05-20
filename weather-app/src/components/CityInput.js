export default function CityInput({onChange, onClick, onKeyDown}){
    return (
        <div id='cityContainer'>
            <input 
            name='city'
            id='cityInput'
            placeholder='Enter a city...'
            onChange={onChange}
            onKeyDown={onKeyDown}
            />
            <button
            onClick={onClick}
            >Get Forecast</button>
        </div>
    )
}