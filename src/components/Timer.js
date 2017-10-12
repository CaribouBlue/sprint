import React from 'react';
import { numberToTime } from '../lib/time-helpers';
import autoBind from '../lib/react-binder';
import { 
  moveTask,
  changeStatus,
  editTask,
  deleteTask,
  addBreak,
} from '../actions/taskActions';

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0,
      running: false,
      completed: 0,
    };

    autoBind(this, 'startTimer', 'pauseTimer', 'stopTimer');
  }

  componentDidUpdate(prevProps) {
    if (!this.props.tasks.length && this.state.running)
      this.pauseTimer();
  }

  createBreak() {
    const completed = this.state.completed + 1;
    const length = completed % 4 === 0 ? 30 : 5;
    this.setState({ completed });
    if (this.props.tasks.length)
      addBreak(length);
  }

  checkDuration(duration) {
    if (Number(duration.toFixed(2)) === 0 || Number(duration.toFixed(2)) - 0.01 === 0) {
      if (this.props.tasks[0].taskName === '~break~') {
        console.log('found a break');
        deleteTask(0, 'queue');
        return true;
      }
      editTask(0, 'queue', 'duration', 0);
      changeStatus(0, 'closed', 'queue');
      moveTask(0, 'queue');
      this.createBreak();
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
    if (this.props.tasks.length && !this.state.running) {
      this.timerInterval = setInterval(() => {
        if(!this.props.tasks.length)
          return this.pauseTimer();
        let time = this.state.time + 0.01;
        if (time.toFixed(2).slice(-2) === '60')
          time = Math.floor(time) + 1;
        this.setState({ time });
        this.updateTaskDuration();
      }, 1000);
      this.setState({ running: true });
    }
  }

  pauseTimer() {
    clearInterval(this.timerInterval);
    this.setState({ running: false });
  }

  stopTimer() {
    clearInterval(this.timerInterval);
    this.setState({ time: 0, running: false, completed: 0 });
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