const defaultState = {
  manager: [],
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
    case 'CLOSE_TASK': {
      const manager = [...state.manager];
      manager[action.payload].status = 'closed';
      return {...state, manager};
    }
    case 'OPEN_TASK': {
      const manager = [...state.manager];
      manager[action.payload].status = 'open';
      return {...state, manager};
    }
    default:
      return state;
  }
};

export default tasksReducer;