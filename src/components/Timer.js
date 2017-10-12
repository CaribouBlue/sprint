import React from 'react';
import { numberToTime } from '../lib/time-helpers';
import autoBind from '../lib/react-binder';

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0,
    };

    autoBind(this, 'startTimer', 'pauseTimer', 'stopTimer');
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      let time = this.state.time + 0.01;
      if (time.toFixed(2).slice(-2) === '60')
        time = Math.floor(time) + 1;
      this.setState({ time })
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.timerInterval);
  }

  stopTimer() {
    clearInterval(this.timerInterval);
    this.setState({ time: 0 });
  }

  render() {
    return (
      <div
        className="timer"
      >
        <h1
          className="clock"
        >{numberToTime(this.state.time)}</h1>
        <div>
        <button
          onClick={this.startTimer}
        >
          Start
        </button>
        <button
          onClick={this.pauseTimer}
        >
          Pause
        </button>
        <button
          onClick={this.stopTimer}
        >
          Stop
        </button>
        </div>
      </div>
    );
  }
};

export default Timer;