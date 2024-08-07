import React from 'react';

class TimerSettings extends React.Component {
  state = {
    delay: '',
    duration: '',
    error: '',
  };
  handleChange = (e: any) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e: any) => {
    e.preventDefault();
    const { delay, duration } = this.state;
    const { setDelay, setDuration, setElapsedTime, setTimerId }: any =
      this.props;
    if (!delay || !duration) {
      this.setState({ error: 'Empty Fields' });
      return;
    }
    if (isNaN(Number(delay)) || isNaN(Number(duration))) {
      this.setState({ error: 'Enter Valid Number' });
      return;
    }
    if (Number(delay) < 0 || Number(duration) <= 0) {
      this.setState({ error: 'Must be positive' });
      return;
    }
    setDelay(parseInt(delay, 10));

    setDuration(parseInt(duration, 10));
    setElapsedTime('00.00');
    this.setState({ error: '' });

    const timerId = setTimeout(
      () => {
        this.startTimer();
      },
      Number(delay) * 60000,
    );
    setTimerId(timerId);
  };
  startTimer = () => {
    const { duration, setElapsedTime, setTimerId }: any = this.props;

    let remainingTime = duration * 60;
    const timerId = setInterval(() => {
      const minutes = Math.floor(remainingTime / 60);
      const seconds = remainingTime % 60;

      setElapsedTime(
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`,
      );
      remainingTime = remainingTime - 1;
      if (remainingTime < 0) {
        clearInterval(timerId);
        alert('Times Up');
        this.resetTimer();
      }
    }, 1000);

    setTimerId(timerId);
  };
  resetTimer = () => {
    const { setElapsedTime, setDelay, setDuration, setTimerId, timerId }: any =
      this.props;
    setElapsedTime('00:00');
    setDuration(null);
    setDelay(null);
    setTimerId(null);
    clearTimeout(timerId);
  };
  render() {
    const { delay, duration, error } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Delay(minutes):
              <input
                type='text'
                name='delay'
                value={delay}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Duration (minutes):
              <input
                type='text'
                name='duration'
                value={duration}
                onChange={this.handleChange}
              />
            </label>
          </div>
          {error && <p>{error}</p>}
          <button type='submit'> Start Counting </button>
        </form>
        <button type='reset' onClick={this.resetTimer}>
          Reset Timer
        </button>
      </div>
    );
  }
}
export default TimerSettings;
