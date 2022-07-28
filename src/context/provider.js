import React, { useContext, useReducer, useEffect } from "react";
//
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
//
import reducer from "../reducer/mainReducer";
//
const initialValue = {
  sidebarActive: false,
  overlayActive: false,
  currentYear: new Date().getFullYear(),
  currentMonth: new Date().getMonth() + 1,
  activePage: {
    todo: false,
    goals: false,
    week: false,
    weeks: false,
    months: false,
    day: false,
  },
  activeInputs: {
    todoInput: false,
    goalsInput: false,
    weekInput: false,
    weeksInput: false,
    monthsInput: false,
    dayInput: false,
  },
  todoData: JSON.parse(localStorage.getItem("todoData")),
  goalsData: JSON.parse(localStorage.getItem("goalsData")),
};
//
const AppContext = React.createContext();
//
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,initialValue)
  //
  const clearWholeTodoData = () => {
    dispatch({type: CLEAR_WHOLE_TODO_DATA})
  }
  //
  const clearWholeGoalsData = () => {
    dispatch({type: CLEAR_WHOLE_GOAL_DATA})
  }
  //
  const openSidebar = () => {
  dispatch({type: SIDEBAR_ACTIVE})
  }
  //
  const closeSidebar = () => {
  dispatch({type: SIDEBAR_CLOSED})
  }
  //
  const selectActivePage = (pages) => {
    dispatch({ type: SET_ACTIVE_PAGE, payload: pages});
  }
  //
  const inputFormOpen = () => {
    dispatch({type: INPUT_ACTIVE})
  }
  //
  const inputFormClose = () => {
    dispatch({type: INPUT_CLOSE})
  }
  //
  const addTodo = (todoData) => {
    dispatch({type: ADD_TODO, payload: todoData})
  }
  //
  const activeTodoTab = (todoData) => {
    dispatch({ type: ACTIVE_TODO_TAB, payload: todoData });
  }
  //
  const deleteTodo = (todoData) => {
    dispatch({type: DELETE_TODO, payload: todoData})
  }
  //
  const handleEditTodo = (todoData) => {
    dispatch({type: EDIT_TODO, payload: todoData})
  }
  //
  const addGoal = (goalData) => {
    dispatch({type: ADD_GOAL, payload: goalData})
  }
  //
  const activeGoalTab = (goalData) => {
    dispatch({type: ACTIVE_GOAL, payload: goalData})
  }
  //
  const editGoal = (goalData) => {
    dispatch({type: EDIT_GOAL, payload: goalData})
  }
  //
  const deleteGoal = (goalData) => {
    dispatch({ type: DELETE_GOAL, payload: goalData});
  }
  //
  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(state.todoData));
    localStorage.setItem("goalsData", JSON.stringify(state.goalsData));
  }, [state])
  //
  return (
    <AppContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        selectActivePage,
        inputFormOpen,
        inputFormClose,
        addTodo,
        activeTodoTab,
        deleteTodo,
        handleEditTodo,
        addGoal,
        activeGoalTab,
        editGoal,
        deleteGoal,
        clearWholeTodoData,
        clearWholeGoalsData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom helps overwise we would need to import 'useContext' and 'AppContext' to use the data in other components
export const useGlobalContext = () => {
  return useContext(AppContext);
};

// AppContext not need because of custom hook
// AppProvider need to wrap components
export { AppContext, AppProvider };
