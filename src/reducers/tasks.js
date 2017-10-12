const defaultState = {
  manager: [
    {
      tags: ['#tag1', '#tag2'],
      taskName: 'Edit resume',
      status: 'open',
      duration: 25.00,
    },
  ],
  queue: [],
};

const tasksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'NEW_TASK': {
      return {...state, manager: [...state.manager, action.payload]};
    }
    case 'DELETE_TASK': {
      const manager = [...state.manager];
      manager.splice(action.payload, 1);
      return {...state, manager};
    }
    case 'CHANGE_STATUS': {
      const pl = action.payload;
      const newState = {};
      newState.manager = [...state.manager];
      newState.queue = [...state.queue];
      newState[pl.location][pl.index] = { ...newState[pl.location][pl.index], status: pl.status};
      return newState;
    }
    case 'MOVE_TASK': {
      const newState = {};
      newState.manager = [...state.manager];
      newState.queue = [...state.queue];
      const task = newState[action.payload.from].splice(action.payload.index, 1)[0];
      newState[action.payload.to].push(task);
      return newState;
    }
    case 'EDIT_TASK': {
      const pl = action.payload;
      const newState = {};
      newState.manager = [...state.manager];
      newState.queue = [...state.queue];
      newState[pl.location][pl.index] = { ...newState[pl.location][pl.index], [pl.propName]: pl.value};
      return newState;
    }
    default:
      return state;
  }
};

export default tasksReducer;