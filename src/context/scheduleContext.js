import React ,{ useContext, useReducer } from "react";
import scheduleReducer from "../reducer/scheduleReducer";
import {
  UPDATE_TEMP_MONTH,
  INCREASE_DECREASE_MONTH,
} from "../reducer/scheduleActions";

const initialState = {
    tempMonthData: {}
}

const ScheduleContext = React.createContext()


const ScheduleProvider = ({children}) => {
    const [state, dispatch] = useReducer(scheduleReducer,initialState)
    //
    const updateTempMonth = (monthData) => {
        dispatch({type: UPDATE_TEMP_MONTH, payload: monthData})
    }
    //
    const incDecMonth = (value) =>{
        dispatch({type: INCREASE_DECREASE_MONTH, payload: value})
    }
    //
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
