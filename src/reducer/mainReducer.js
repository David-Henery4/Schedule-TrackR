import {
  SIDEBAR_ACTIVE,
  SIDEBAR_CLOSED,
  SET_ACTIVE_PAGE,
  INPUT_ACTIVE,
  INPUT_CLOSE,
  ADD_TODO,
  ACTIVE_TODO_TAB,
  DELETE_TODO,
  EDIT_TODO,
  ADD_GOAL,
  ACTIVE_GOAL,
  EDIT_GOAL,
  DELETE_GOAL,
  CLEAR_WHOLE_GOAL_DATA,
  CLEAR_WHOLE_TODO_DATA,
} from "../reducer/actions";

const mainReducer = (state, action) => {
  //
  if (action.type === CLEAR_WHOLE_GOAL_DATA){
    return {...state, goalsData: []}
  }
  //
  if (action.type === CLEAR_WHOLE_TODO_DATA){
    return {...state, todoData:[]}
  }
  //
  if (action.type === SIDEBAR_ACTIVE) {
    return { ...state, sidebarActive: true };
  }
  //
  if (action.type === SIDEBAR_CLOSED) {
    return { ...state, sidebarActive: false };
  }
  //
  if (action.type === SET_ACTIVE_PAGE) {
    return { ...state, activePage: { ...action.payload } };
  }
  // INPUT OPEN
  if (action.type === INPUT_ACTIVE) {
    const { activeInputs } = state;
    if (state.activePage.weekHeader) {
      return {
        ...state,
        overlayActive: !state.overlayActive,
        activeInputs: { ...activeInputs, weekInput: true },
      };
    }
    if (state.activePage.currentHeader) {
      return {
        ...state,
        overlayActive: !state.overlayActive,
        activeInputs: { ...activeInputs, dayInput: true },
      };
    }
    if (state.activePage.todoHeader) {
      return {
        ...state,
        overlayActive: !state.overlayActive,
        activeInputs: { ...activeInputs, todoInput: true },
      };
    }
    //
    if (state.activePage.goalsHeader) {
      return {
        ...state,
        overlayActive: !state.overlayActive,
        activeInputs: { ...activeInputs, goalsInput: true },
      };
    }
    return { ...state };
  }

  // INPUT CLOSED
  if (action.type === INPUT_CLOSE) {
    const { activeInputs } = state;
    if (state.activePage.weekHeader) {
      return {
        ...state,
        overlayActive: false,
        activeInputs: { ...activeInputs, weekInput: false },
      };
    }
    if (state.activePage.currentHeader) {
      return {
        ...state,
        overlayActive: false,
        activeInputs: { ...activeInputs, dayInput: false },
      };
    }
    if (state.activePage.todoHeader) {
      return {
        ...state,
        overlayActive: false,
        activeInputs: { ...activeInputs, todoInput: false },
      };
    }
    if (state.activePage.goalsHeader) {
      return {
        ...state,
        overlayActive: false,
        activeInputs: { ...activeInputs, goalsInput: false },
      };
    }
    return { ...state };
  }

  // ADD TODO
  if (action.type === ADD_TODO) {
    if (state.activePage.todoHeader) {
      // dont think todo data copy needed
      const { todoData } = state;
      const id = Date.now();
      action.payload.id = id;
      const newData = [...state.todoData, action.payload];
      return { ...state, todoData: newData };
    }
    return { ...state };
  }
  // ACTIVE TODO FOR THE DROP DOWN EDIT TAB
  if (action.type === ACTIVE_TODO_TAB) {
    return { ...state, todoData: action.payload };
  }
  // DELETE TODO
  if (action.type === DELETE_TODO) {
    const newData = action.payload;
    return { ...state, todoData: newData };
  }
  // EDIT TODO
  if (action.type === EDIT_TODO) {
    const newData = action.payload;
    return { ...state, todoData: newData };
  }

  // ADD GOAL
  if (action.type === ADD_GOAL) {
    const newGoals = action.payload;
    const addedGoals = [...state.goalsData, newGoals];
    return { ...state, goalsData: addedGoals };
  }
  // ACTIVE GOAL FOR THE DROP DOWN EDIT TAB
  if (action.type === ACTIVE_GOAL) {
    const newData = action.payload;
    return { ...state, goalsData: newData };
  }
  // EDIT GOAL
  if (action.type === EDIT_GOAL) {
    const newData = action.payload;
    return { ...state, goalsData: newData };
  }
  // DELETE GOAL
  if (action.type === DELETE_GOAL) {
    const newData = action.payload;
    return { ...state, goalsData: newData };
  }

  // NO MATCHING ACTION TYPE ERROR
  throw new Error(`No matching action type: ${action.type}`);
};

export default mainReducer;
