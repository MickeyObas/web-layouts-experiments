import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let timerId;
    if(active){
      timerId = setInterval(() => {
        setElapsedTime((t) => {
          return t + 10;
        })
      }, 10)
    } else{
      clearInterval(timerId);
    }
    return () => {
      clearInterval(timerId);
    }
  }, [active])

  function handleStartStop(){
    setActive(!active);
  }

  function handleReset(){
    setActive(false);
    setElapsedTime(0);
  }

  const formatTime = (time) => {
    const getMilliseconds = `0${(elapsedTime % 1000) /10}`.slice(-2);
    const seconds = Math.floor(time / 1000);
    const getSeconds = `0${seconds % 60}`.slice(-2);
    const getMinutes = `0${Math.floor(seconds / 60)}`.slice(-2);
    return `${getMinutes}:${getSeconds}:${getMilliseconds}`;
  }

  return (
    <div id='container'>
      <div id="timerContainer">
        <h1>{formatTime(elapsedTime)}</h1>
      </div>
      <div id='buttonRow'>
        <button 
        id="resetLapButton"
        onClick={handleReset}
        >Reset</button>
        <button 
        id="startStopButton"
        onClick={handleStartStop}
        >{active ? 'Stop' : 'Start'}</button>
      </div>
    </div>
  );
}

export default App;
