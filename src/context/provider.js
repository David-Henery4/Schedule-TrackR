import React, { useState, useContext, useReducer } from "react";
import { SIDEBAR_ACTIVE, SIDEBAR_CLOSED } from "../reducer/actions";
import reducer from "../reducer/mainReducer";

const initialValue = {
  sidebarActive: false,
}

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,initialValue)

  const openSidebar = () => {
  dispatch({type: SIDEBAR_ACTIVE})
  }

  const closeSidebar = () => {
  dispatch({type: SIDEBAR_CLOSED})
  }
  //
  return <AppContext.Provider value={{...state, openSidebar, closeSidebar}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
