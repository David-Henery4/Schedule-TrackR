import React, { useContext, useReducer, useEffect } from "react";
// import {useLocation} from "react-router-dom"
import {
  SIDEBAR_ACTIVE,
  SIDEBAR_CLOSED,
  SET_ACTIVE_PAGE,
  GET_INITIAL_CALANDAR_DATA,
} from "../reducer/actions";
import reducer from "../reducer/mainReducer";

const initialValue = {
  sidebarActive: false,
  todaysDate: new Date(),
  currentYear:  new Date().getFullYear(),
  currentMonth: new Date().getMonth() + 1,
  activePage: {
    todo: false,
    goals: false,
    week: false,
    weeks: false,
    months: false,
    day: false,
  }
}

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
  useEffect(() => {
    getInitialCalandarData(currentYear, currentMonth); // MIGHT DEPEND ON CHANGE
    // eslint-disable-next-line
  }, [])
  //
  return <AppContext.Provider value={{...state, openSidebar, closeSidebar, selectActivePage, getInitialCalandarData}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
