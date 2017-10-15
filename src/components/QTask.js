import React from 'react';
import { 
  moveTask,
  editTask,
} from '../actions/taskActions';
import { ClickToEdit } from './_index';
import {
  parseSubmitTime,
} from '../lib/time-helpers';

const handleSubmit = (position, value) => {
  value = Number(value.replace(':', '.'));
  editTask(position, 'queue', 'duration', value);
}

const QTask = props => (
  <div
    className={props.break ? 'break-box' : 'task-box'}
    style={{color: props.closed ? 'grey' : 'black'}}
    onMouseDown={() => props.setDragging(props.position)}
    onMouseEnter={() => props.break ? null : props.swap(props.position)}
  >
    {
      props.break ? <h4> </h4> :
      <button
        onClick={() => moveTask(props.position, 'queue')}
      >
        ⇦
      </button>
    }
    <div>
      <h1
        className="task-name"
      >{props.name}</h1>
      <ClickToEdit
        textClass="task-tags"
        text={props.duration}
        preSubmitProcessor={parseSubmitTime}
        handleSubmit={(value) => handleSubmit(props.position, value)}
        blockEdits={props.running}
      />
    </div>
    <button
      onClick={() => {
        editTask(props.position, 'queue', 'duration', 0);
      }}
    >
      ↻
    </button>
  </div>
);

export default QTask;