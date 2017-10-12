import React from 'react';
import _ from 'lodash';
import { QTask } from './_index';

const renderTasks = (tasks) => {
  return tasks.map((task, i) => {
    var tags = task.tags ? task.tags.join(' ') : '';
    var name = task.taskName;
    return (
      <QTask
        key={_.uniqueId()}
        position={i}
        name={name}
        tags={tags}
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