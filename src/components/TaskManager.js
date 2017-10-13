import React, { Component } from 'react';
import _ from 'lodash';
import {
  Task,
} from './_index';

export default  class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tab: 'open',
    }

    this.selectTab = this.selectTab.bind(this);
  }

  getTabClass(tab) {
    return this.state.tab === tab ? 'tab open' : 'tab';
  }

  selectTab(e, tab) {
    e.preventDefault();
    this.setState({ tab });
  }

  renderTasks() {
    return this.props.tasks.map((task, i) => {
      var tags = task.tags ? task.tags.join(' ') : '';
      var name = task.taskName;
      if (task.status !== this.state.tab)
        return null;
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
      <div>
        <button
          className={this.getTabClass('open')}
          onClick={(e) => this.selectTab(e, 'open')}
        >Todo</button>
        <button
          className={this.getTabClass('closed')}
          onClick={(e) => this.selectTab(e, 'closed')}
        >Completed</button>
      </div>
        {this.renderTasks()}
      </div>
    );
  }
}