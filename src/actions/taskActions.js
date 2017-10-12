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

export const deleteTask = (index) => {
  const action = {
    type: 'DELETE_TASK',
    payload: index,
  };
  store.dispatch(action);
};

export const closeTask = (index) => {
  const action = {
    type: 'CLOSE_TASK',
    payload: index,
  };
  store.dispatch(action);
}

export const openTask = (index) => {
  const action = {
    type: 'OPEN_TASK',
    payload: index,
  };
  store.dispatch(action);
}