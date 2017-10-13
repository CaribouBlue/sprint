import React, { Component } from 'react';
import _ from 'lodash';
import {
  Task,
} from './_index';

export default  class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tab: 'all',
      allTags: [],
      status: 'all',
    }

    this.selectTab = this.selectTab.bind(this);
    this.selectStatus = this.selectStatus.bind(this);
  }

  getTabClass(tab) {
    return this.state.tab === tab ? 'tab open' : 'tab';
  }

  selectTab(e, tab) {
    e.preventDefault();
    this.setState({ tab });
  }

  selectStatus(e) {
    const status = e.target.value;
    this.setState({ status });
  }

  renderTabs() {
    return this.props.tasks.reduce((memo, task) => {
      if (task.tags)
        return [...memo, ...task.tags]
      return memo;
    }, [])
    .map(tabName => {
      tabName = tabName.slice(1);
      return (
        <button
          className={this.getTabClass(tabName)}
          onClick={(e) => this.selectTab(e, tabName)}
          key={_.uniqueId()}
        >{tabName}</button>
      );
    });
  }

  renderTasks() {
    const open = [];
    const closed = [];
    this.props.tasks.forEach((task, i) => {
      const tags = task.tags ? task.tags.join(' ') : '';
      const name = task.taskName;
      if (this.state.tab !== 'all' && task.tags.indexOf('#' + this.state.tab) < 0)
        return null;
      if (this.state.status !== 'all' && task.status !== this.state.status)
        return null;
      const taskEl = (
        <Task
          key={_.uniqueId()}
          position={i}
          name={name}
          tags={tags}
          closed={task.status === 'closed'}
          running={this.props.running}
        />
      );
      task.status === 'closed' ? closed.push(taskEl) : open.push(taskEl);
    });
    return [...open, ...closed];
  }

  render() {
    return (
      <div
        className="task-manager"
      >
        <div
          className="tabs-box"
        >
          <button
            className={this.getTabClass('all')}
            onClick={(e) => this.selectTab(e, 'all')}
          >all</button>
          {this.renderTabs()}
        </div>
        <form
          className="status-form"
          onChange={this.selectStatus}
        >
          <input
            type="radio"
            name="status"
            value="all"
            defaultChecked
          />
          <p>all</p>
          <input
            type="radio"
            name="status"
            value="open"
          />
          <p>open</p>
          <input
            type="radio"
            name="status"
            value="closed"
          /> 
          <p>closed</p>
        </form>
        {this.renderTasks()}
      </div>
    );
  }
}