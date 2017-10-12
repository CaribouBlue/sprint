import React from 'react';
import { connect } from 'react-redux';
import {
  TaskBar,
  TaskManager,
  TaskQueue,
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
          <TaskQueue
            tasks={this.props.tasks.queue}
          />
        </div>
        {
        // <Timer />
        }
      </div>
    );
  }
};

const mapState = (tasks) => {
  return {tasks};
};

export default connect(mapState, null)(App);