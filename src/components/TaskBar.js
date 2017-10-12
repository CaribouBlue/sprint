import React, { Component } from 'react';
import autoBind from '../lib/react-binder';
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
    parsedInput.taskName = input
      // remove tags
      .replace(/#\S*/g, '')
      // remove extra spaces
      .replace(/ {2,}/g, ' ')
      // remove trailing white space
      .trim();
    return parsedInput;
  }

  render() {
    const boxStyle = {
      border: '1px solid black',
      padding: '15px'
    };

    return (
      <div
        style={boxStyle}
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