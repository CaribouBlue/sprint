import React from 'react';
import _ from 'lodash';
import autoBind from '../lib/react-binder';
import { numberToTime } from '../lib/time-helpers';
import { swapTasks } from '../actions/taskActions';
import { 
  QTask,
} from './_index';



class TaskQueue extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dragging: 'none',
    };

    autoBind(this, 'setDragging', 'swap');
  }

  componentDidMount() {
  }

  setDragging(item = 'none') {
    this.setState({ dragging: item });
  }

  swap(index1) {
    const index2 = this.state.dragging;
    if (this.state.dragging !== 'none' && index1 !== index2 && !this.props.running) {
      swapTasks(index1, index2);
      this.setState({ dragging: index1 })
    }
  }

  renderTasks() {
    return this.props.tasks.map((task, i) => {
      let duration = numberToTime(task.duration)
      return (
        <QTask
          key={_.uniqueId()}
          position={i}
          name={task.taskName}
          duration={duration}
          closed={task.status === 'closed'}
          running={this.props.running}
          break={task.break}
          setDragging={this.setDragging}
          swap={this.swap}
        />      
      );
    });
  }

  render() {
    return (
      <div
        className="task-queue"
        onMouseUp={e => {
          if (e.target.tagName === 'DIV')
            this.setDragging();
        }}
        onMouseLeave={() => {
          this.setDragging();
        }}
      >
        {this.renderTasks()}
      </div>
    );
  }

};

export default TaskQueue;