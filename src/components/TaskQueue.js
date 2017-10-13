import React from 'react';
import _ from 'lodash';
import { numberToTime } from '../lib/time-helpers';
import { 
  QTask,
  BreakTask,
} from './_index';

const renderTasks = (tasks, running) => {
  return tasks.map((task, i) => {
    let duration = numberToTime(task.duration)
    return (
      <QTask
        key={_.uniqueId()}
        position={i}
        name={task.taskName}
        duration={duration}
        closed={task.status === 'closed'}
        running={running}
        break={task.break}
      />      
    );
  });
};

const TaskQueue = props => (
  <div
    className="task-queue"
  >
    {renderTasks(props.tasks, props.running)}
  </div>
);

export default TaskQueue;