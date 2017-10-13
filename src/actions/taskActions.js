import store from '../index';

export const newTask = (taskObj) => {
  const action = { 
    type: 'NEW_TASK',
    payload: {
      ...taskObj,
      status: 'open',
    },
  };
  store.dispatch(action);
};

export const deleteTask = (index, location = 'manager') => {
  const action = {
    type: 'DELETE_TASK',
    payload: {
      index,
      location,
    },
  };
  store.dispatch(action);
};

export const changeStatus = (index, status, location) => {
  const action = {
    type: 'CHANGE_STATUS',
    payload: {
      index,
      status,
      location,
    },
  };
  store.dispatch(action);
}

export const moveTask = (index, location) => {
  const action = {
    type: 'MOVE_TASK',
    payload: {
      index,
      from: location,
      to: location === 'queue' ? 'manager' : 'queue',
    },
  };
  store.dispatch(action);
}

export const editTask = (index, location, propName, value) => {
  const action = {
    type: 'EDIT_TASK',
    payload: {
      index,
      location,
      propName,
      value,
    },
  };
  store.dispatch(action);
}

export const addBreaks = (smallDuration = 5, bigDuration = 30) => {
  const queue = store.getState().queue;
  const newQueue = [];
  const smallBreak = {
    taskName: '~break~',
    duration: smallDuration,
    break: true,
    status: 'open',
  };
  const bigBreak = { ...smallBreak, duration: bigDuration };
  let taskCounter = 0;
  for (let i = 0; i < queue.length; i++) {
    newQueue.push(queue[i]);
    if(i < queue.length - 1 && !queue[i].break && !queue[i + 1].break) {
      if ((taskCounter + 1) % 4 === 0){
        newQueue.push(bigBreak);
      }
      else {
        newQueue.push(smallBreak);
      }
    }
    if (!queue[i].break)
      taskCounter++;
  }
  store.dispatch({
    type: 'NEW_QUEUE',
    payload: {
      newQueue
    },
  });
}

export const removeBreaks = () => {
  const queue = store.getState().queue;
  const newQueue = [];
  queue.forEach(item => {
    if (!item.break)
      newQueue.push(item);
  });
  store.dispatch({
    type: 'NEW_QUEUE',
    payload: {
      newQueue
    },
  });
}