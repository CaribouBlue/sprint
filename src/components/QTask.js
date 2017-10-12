import React from 'react';
import { 
  moveTask,
  changeStatus,
  editTask,
} from '../actions/taskActions';
import { ClickToEdit } from './_index';
import {
  //parseInputTime,
  parseSubmitTime,
} from '../lib/time-helpers';

const handleSubmit = (position, value) => {
  value = Number(value.replace(':', '.'));
  editTask(position, 'queue', 'duration', value);
}

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
      <h1
        className="task-name"
      >{props.name}</h1>
      <ClickToEdit
        textClass="task-tags"
        text={props.duration}
        //preInputProcessor={parseInputTime}
        preSubmitProcessor={parseSubmitTime}
        handleSubmit={(value) => handleSubmit(props.position, value)}
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