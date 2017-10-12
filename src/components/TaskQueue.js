import React from 'react';
import _ from 'lodash';
import { numberToTime } from '../lib/time-helpers';
import { QTask } from './_index';

const renderTasks = (tasks) => {
  return tasks.map((task, i) => {
    let duration = numberToTime(task.duration)
    return (
      <QTask
        key={_.uniqueId()}
        position={i}
        name={task.taskName}
        duration={duration}
        closed={task.status === 'closed'}
      />
    );
  });
};

const TaskQueue = props => (
  <div
    className="task-queue"
  >
    {renderTasks(props.tasks)}
  </div>
);

export default TaskQueue;