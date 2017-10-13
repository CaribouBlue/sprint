import React from 'react';
import { 
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

const BreakTask = props => (
  <div
    className="break-box"
  >
    <button>
    </button>
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

export default BreakTask;