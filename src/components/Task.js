import React from 'react';
import { ClickToEdit } from './_index';
import { 
  deleteTask,
  changeStatus,
  moveTask,
  editTask,
  addBreaks,
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
      <ClickToEdit
        text={props.name}
        textClass="task-name"
        handleSubmit={(value) => editTask(props.position, 'manager', 'taskName', value)}
        blockEdits={props.closed}
      />
      <p
        className="task-tags"
      >{props.tags}</p>
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
          onClick={() => {
            moveTask(props.position, 'manager');
            if (props.running)
              addBreaks();
          }}
        >
          ⇨
        </button>
    }
  </div>
);

export default Task;