import React from 'react';
import { numberToTime } from '../lib/time-helpers';
import autoBind from '../lib/react-binder';
import { 
  moveTask,
  changeStatus,
  editTask,
  deleteTask,
  addBreaks,
  removeBreaks,
} from '../actions/taskActions';

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0,
      completed: 0,
      lastButton: 'none',
    };

    autoBind(this, 'startTimer', 'pauseTimer', 'stopTimer');
  }

  componentDidUpdate(prevProps) {
    if (!this.props.tasks.length && this.props.running)
      this.pauseTimer();
  }

  checkDuration(duration) {
    if (Number(duration.toFixed(2)) <= 0 || Number(duration.toFixed(2)) - 0.01 <= 0) {
      if (this.props.tasks[0].break) {
        deleteTask(0, 'queue');
        return true;
      }
      editTask(0, 'queue', 'duration', 0);
      changeStatus(0, 'closed', 'queue');
      moveTask(0, 'queue');
      return true;
    }
  }

  updateTaskDuration() {
    let duration = this.props.tasks[0].duration;
    if (this.checkDuration(duration)) return;
    if (duration.toFixed(2).slice(-2) === '00')
      duration = Math.floor(duration) - 0.41;
    else duration -= 0.01;
    editTask(0, 'queue', 'duration', duration);
  }

  startTimer() {
    if (this.props.tasks.length && !this.props.running) {
      this.setState({ lastButton: 'start' });
      addBreaks();
      this.timerInterval = setInterval(() => {
        if(!this.props.tasks.length)
          return this.pauseTimer();
        let time = this.state.time + 0.01;
        if (time.toFixed(2).slice(-2) === '60')
          time = Math.floor(time) + 1;
        this.setState({ time });
        this.updateTaskDuration();
      }, 1000);
      this.props.toggleTimer();
    }
  }

  pauseTimer() {
    if (this.props.running) {
      this.setState({ lastButton: 'pause' });
      clearInterval(this.timerInterval);
      this.props.toggleTimer();
    }
  }

  stopTimer() {
    this.setState({ lastButton: 'stop' });
    setTimeout(() => this.setState({ lastButton: 'none' }), 500);
    clearInterval(this.timerInterval);
    removeBreaks();
    this.setState({ time: 0, completed: 0 });
    if (this.props.running) {
      this.props.toggleTimer();
    }
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
            className={this.state.lastButton === 'start' ? 'selected' : null}
          >
            Start
          </button>
          <button
            onClick={this.pauseTimer}
            className={this.state.lastButton === 'pause' ? 'selected' : null}
          >
            Pause
          </button>
          <button
            onClick={this.stopTimer}
            className={this.state.lastButton === 'stop' ? 'selected' : null}
          >
            Stop
          </button>
        </div>
      </div>
    );
  }
};

export default Timer;