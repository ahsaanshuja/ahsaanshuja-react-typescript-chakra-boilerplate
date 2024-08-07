import { useStopWatch } from '../../contexts/stopWatchContext';
import TimerSettings from '../../pages/StopWatch';

const TimerSettingsController = (props: any) => {
  const {
    setDelay,
    setDuration,
    setElapsedTime,
    setTimerId,
    timerId,
    duration,
  }: any = useStopWatch();
  return (
    <TimerSettings
      setDelay={setDelay}
      setDuration={setDuration}
      setElapsedTime={setElapsedTime}
      setTimerId={setTimerId}
      timerId={timerId}
      duration={duration}
      {...props}
    />
  );
};

export default TimerSettingsController;
