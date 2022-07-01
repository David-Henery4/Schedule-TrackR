import React, { useState, useContext, useReducer, useEffect } from "react";
import {useLocation} from "react-router-dom"
import {
  SIDEBAR_ACTIVE,
  SIDEBAR_CLOSED,
  SET_ACTIVE_PAGE,
} from "../reducer/actions";
import reducer from "../reducer/mainReducer";

const initialValue = {
  sidebarActive: false,
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
  return <AppContext.Provider value={{...state, openSidebar, closeSidebar, selectActivePage}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
