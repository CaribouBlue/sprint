import React from 'react';
import { 
  deleteTask,
  changeStatus,
  moveTask,
} from '../actions/taskActions';

const Task = props => (
  <div
    className="task-box"
    style={{color: props.closed ? 'grey' : 'black'}}
  >
    <button
      onClick={() => changeStatus(props.position, props.closed ? 'open' : 'closed', 'manager')}
    >
      {props.closed ? '✓' : 'O'}
    </button>
    <div>
      <h1>{props.name}</h1>
      <p>{props.tags}</p>
    </div>
    {
      props.closed ?
        <button
          onClick={() => deleteTask(props.position)}
        >
          X
        </button>
        :
        <button
          onClick={() => moveTask(props.position, 'manager')}
        >
          ⇨
        </button>
    }
  </div>
);

export default Task;