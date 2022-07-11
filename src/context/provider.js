import React, { useContext, useReducer, useEffect } from "react";
import { TODOPATH } from "../data/pathNames";
// import {useLocation} from "react-router-dom"
import {
  SIDEBAR_ACTIVE,
  SIDEBAR_CLOSED,
  SET_ACTIVE_PAGE,
  GET_INITIAL_CALANDAR_DATA,
  INPUT_ACTIVE,
  INPUT_CLOSE,
  ADD_TODO,
  ACTIVE_TODO_TAB,
  DELETE_TODO,
  EDIT_TODO,
  ADD_GOAL,
} from "../reducer/actions";
import reducer from "../reducer/mainReducer";

const initialValue = {
  sidebarActive: false,
  overlayActive: false,
  todaysDate: new Date(),
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
  todoData: [],
  goalsData: []
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,initialValue)
  const {currentYear,currentMonth} = state
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
  const getInitialCalandarData = (year,month) => {
    dispatch({type: GET_INITIAL_CALANDAR_DATA, payload: {year,month}})
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
  useEffect(() => {
    getInitialCalandarData(currentYear, currentMonth); // MIGHT DEPEND ON CHANGE
    // eslint-disable-next-line
  }, [])
  //
  return <AppContext.Provider value={{...state, openSidebar, closeSidebar, selectActivePage, getInitialCalandarData, inputFormOpen, inputFormClose, addTodo, activeTodoTab, deleteTodo, handleEditTodo, addGoal}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
