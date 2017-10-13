import React, { Component } from 'react';
import _ from 'lodash';
import {
  Task,
} from './_index';

export default  class extends Component {
  renderTasks() {
    return this.props.tasks.map((task, i) => {
      var tags = task.tags ? task.tags.join(' ') : '';
      var name = task.taskName;
      return (
        <Task
          key={_.uniqueId()}
          position={i}
          name={name}
          tags={tags}
          closed={task.status === 'closed'}
          running={this.props.running}
        />
      );
    });
  }

  render() {
    return (
      <div
        className="task-manager"
      >
        {this.renderTasks()}
      </div>
    );
  }
}