import React from 'react';
import { connect } from 'react-redux';
import {
  TaskBar,
  TaskManager,
  TaskQueue,
  Timer,
} from './_index';

class App extends React.Component {
  render() {
    return (
      <div>
        <TaskBar />
        <div
          className="center-console"
        >
          <TaskManager
            tasks={this.props.tasks.manager}
          />
          <div
            className="right"
          >
            <Timer 
              tasks={this.props.tasks.queue}
            />
            <TaskQueue
              tasks={this.props.tasks.queue}
            />
          </div>
        </div>
        {
        }
      </div>
    );
  }
};

const mapState = (tasks) => {
  return {tasks};
};

export default connect(mapState, null)(App);