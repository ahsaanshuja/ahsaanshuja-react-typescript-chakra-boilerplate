import { createContext, useContext, useState } from 'react';
const StopWatchContext = createContext({});

export const StopWatchProvider = ({ children }: any) => {
  const [delay, setDelay] = useState(null);
  const [duration, setDuration] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(null);
  const [timerId, setTimerId] = useState(null);

  return (
    <StopWatchContext.Provider
      value={{
        delay,
        setDelay,
        duration,
        setDuration,
        elapsedTime,
        setElapsedTime,
        timerId,
        setTimerId,
      }}
    >
      {children}
    </StopWatchContext.Provider>
  );
};

export const useStopWatch = () => useContext(StopWatchContext);
