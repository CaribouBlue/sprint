import React from 'react';
import { 
  deleteTask,
  closeTask,
  openTask,
} from '../actions/taskActions';

const Task = props => (
  <div
    className="task-box"
    style={{color: props.closed ? 'grey' : 'black'}}
  >
    <button
      onClick={() => props.closed ? openTask(props.position) : closeTask(props.position)}
    >
      {props.closed ? '✓' : 'O'}
    </button>
    <div>
      <h1>{props.name}</h1>
      <p>{props.tags}</p>
    </div>
    <button
      onClick={() => deleteTask(props.position)}
    >
      X
    </button>
  </div>
);

export default Task;