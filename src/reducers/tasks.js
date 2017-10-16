const defaultState = {
  manager: [
    {
      tags: ['#job-search'],
      taskName: 'Edit resume',
      status: 'open',
      duration: 25.00,
      createdAt: Date.now(),
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
      const pl = action.payload;
      const newState = {};
      newState.manager = [...state.manager];
      newState.queue = [...state.queue];
      newState[pl.location].splice(pl.index, 1);
      return newState;
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
    case 'NEW_QUEUE': {
      const pl = action.payload;
      return {...state, queue: pl.newQueue};
    }
    case 'SWAP_TASKS': {
      const pl = action.payload;
      const newState = {};
      newState.manager = [...state.manager];
      newState.queue = [...state.queue];
      const item1 = newState.queue[pl.index1];
      newState.queue[pl.index1] = newState.queue[pl.index2];
      newState.queue[pl.index2] = item1;
      return newState;
    }
    default:
      return state;
  }
};

export default tasksReducer;