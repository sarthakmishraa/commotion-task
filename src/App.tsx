import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [stopwatch, setStopwatch] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [laps, setLaps] = useState<number[] | null>(null);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false)
  };

  const handleLap = () => {
    let array:number[] = [];
    if(laps)
    array = laps;

    array?.push(stopwatch);
    setLaps(array);
  }

  useEffect(() => {
    if(isRunning) {
      setTimeout(() => {
        setStopwatch(stopwatch + 1);
      }, 1000);
    }
    else {
      console.log(isRunning)
    }
  }, [stopwatch, isRunning]);

  return (
    <>
      <div>

        <div>
          Stopwatch: { stopwatch }s
        </div>
        <div>
          <button onClick={ handleStart }>Start</button>
          <button onClick={ handleStop }>Stop</button>
          <button onClick={ handleLap }>Lap</button>
        </div>
        <div>
          {
            laps &&
            laps.map((lap) => (
              <p>{ lap }</p>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
