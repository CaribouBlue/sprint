import store from '../index';

export const newTask = (taskObj) => {
  const action = { 
    type: 'NEW_TASK',
    payload: {
      ...taskObj,
      status: 'open',
      duration: 25.00,
    },
  };
  store.dispatch(action);
};

export const deleteTask = (index) => {
  const action = {
    type: 'DELETE_TASK',
    payload: index,
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