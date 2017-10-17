import React from 'react';
import { connect } from 'react-redux';
import {
  TaskBar,
  TaskManager,
  TaskQueue,
  Timer,
} from './_index';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timerRunning: false,
    }

    this.toggleTimer = this.toggleTimer.bind(this);
  }

  toggleTimer() {
    this.setState({ timerRunning: !this.state.timerRunning });
  }

  render() {
    return (
      <div
        id="app-box"
      >
        <div
          className="left"
        >
          <TaskBar />
          <TaskManager
            tasks={this.props.tasks.manager}
            running={this.state.timerRunning}
          />
        </div>
        <div
          className="right"
        >
          <Timer 
            tasks={this.props.tasks.queue}
            running={this.state.timerRunning}
            toggleTimer={this.toggleTimer}
          />
          <TaskQueue
            tasks={this.props.tasks.queue}
            running={this.state.timerRunning}
          />
        </div>
      </div>
    );
  }
};

const mapState = (tasks) => {
  return {tasks};
};

export default connect(mapState, null)(App);