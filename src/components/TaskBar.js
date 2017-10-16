import React, { Component } from 'react';
import autoBind from '../lib/react-binder';
import { parseSubmitTime } from '../lib/time-helpers';
import { newTask } from '../actions/taskActions';

export default  class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskInput: '',
    };

    autoBind(this, 'taskInputHandler', 'inputSubmitHandler');
  }

  taskInputHandler(e) {
    e.preventDefault();
    var val = e.target.value;
    this.setState({ taskInput: val });
  }

  inputSubmitHandler(e) {
    e.preventDefault();
    newTask(this.parseInput());
    this.setState({ taskInput: '' });
  }

  parseInput() {
    const parsedInput = {};
    var input = this.state.taskInput
    // get array of tags
    parsedInput.tags = input.match(/#\S*/g);
    {
      // get duration or set manually if none is given
      let duration = input.match(/~\S*/g);
      if (!duration) duration = ['25'];
      // parse to time string
      duration = parseSubmitTime(duration[0]);
      // convert to number
      parsedInput.duration = Number(duration.replace(':', '.'));
    }
    // remove all special inputs and extra spaces to get task name
    parsedInput.taskName = input
      // remove tags
      .replace(/#\S*/g, '')
      // remove duration
      .replace(/~\S*/g, '')
      // remove extra spaces
      .replace(/ {2,}/g, ' ')
      // remove trailing white space
      .trim();
    return parsedInput;
  }

  render() {
    return (
      <div
        className="task-bar"
      >
        <form
          onSubmit={this.inputSubmitHandler}
        >
          <input 
            type="text"
            value={this.state.taskInput}
            onChange={this.taskInputHandler}
          />
          <button
            type="submit"
          >
            Add Task
          </button>
        </form>
      </div>
    );
  }
}