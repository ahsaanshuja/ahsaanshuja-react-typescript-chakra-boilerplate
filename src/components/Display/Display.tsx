import { useStopWatch } from '../../contexts/stopWatchContext';
const Display = () => {
  const { elapsedTime }: any = useStopWatch();
  return (
    <div>
      <h1> {elapsedTime}</h1>
    </div>
  );
};
export default Display;
