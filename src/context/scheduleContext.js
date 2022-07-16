import React ,{ useContext, useReducer } from "react";
import scheduleReducer from "../reducer/scheduleReducer";
import {
  UPDATE_TEMP_MONTH,
  INCREASE_DECREASE_MONTH,
  SET_CURRENT_MONTH,
} from "../reducer/scheduleActions";
import { useEffect } from "react";

const initialState = {
  year: new Date().getFullYear() ,
  monthNumber: new Date().getMonth()+1,
  monthName: new Date().toLocaleDateString("default", {
      month: "long",
    }),
  tempMonthData: {},
}

const ScheduleContext = React.createContext()


const ScheduleProvider = ({children}) => {
    const [state, dispatch] = useReducer(scheduleReducer,initialState)
    //
    const setCurrentMonth = () => {
      dispatch({type: SET_CURRENT_MONTH})
    }
    //
    const updateTempMonth = (monthData) => {
        dispatch({type: UPDATE_TEMP_MONTH, payload: monthData})
    }
    //
    const incDecMonth = (value) =>{
        dispatch({type: INCREASE_DECREASE_MONTH, payload: value})
    }
    //
    useEffect(() => {
      setCurrentMonth()
    }, [])
    return (
      <ScheduleContext.Provider
        value={{ ...state, updateTempMonth, incDecMonth }}
      >
        {children}
      </ScheduleContext.Provider>
    );
}
//
export const useScheduleContext = () => {
    return useContext(ScheduleContext)
}
//
export {ScheduleProvider}
