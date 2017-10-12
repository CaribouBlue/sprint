import React from 'react';
import { 
  moveTask,
  changeStatus,
} from '../actions/taskActions';

const QTask = props => (
  <div
    className="task-box"
    style={{color: props.closed ? 'grey' : 'black'}}
  >
    <button
      onClick={() => moveTask(props.position, 'queue')}
    >
      ⇦
    </button>
    <div>
      <h1>{props.name}</h1>
      <p>{props.duration}</p>
    </div>
    <button
      onClick={() => {
        changeStatus(props.position, 'closed', 'queue');
        moveTask(props.position, 'queue');
      }}
    >
      {'O'}
    </button>
  </div>
);

export default QTask;