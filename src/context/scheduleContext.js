import React ,{ useContext, useReducer } from "react";
import scheduleReducer from "../reducer/scheduleReducer";
import {
  UPDATE_TEMP_MONTH,
  INCREASE_DECREASE_MONTH,
  SET_CURRENT_MONTH,
  FORMAT_CURRENT_DATE,
  UPDATE_CURRENT_DATE_HEADER,
  ADD_TO_MAIN_SCHEDULE,
  ACTIVE_SCHEDULE_TAB,
  DELETE_FROM_SCHEDULE,
  EDIT_SCHEDULE_TAB,
  CLEAR_WHOLE_SCHEDULE_DATA,
  REMOVE_EXPIRED_SCHEDULE_DATA,
} from "../reducer/scheduleActions";
import { useEffect } from "react";

const initialScheduleState = {
  scheduleOverallData: JSON.parse(localStorage.getItem("scheduleOverallData")) || [],
  scheduleTodaysData: [],
  scheduleWeekData: [],
};

const initialState = {
  todaysDate: new Date(),
  todaysDateFormated: {},
  dayPageHeaderDate: {},
  year: new Date().getFullYear() ,
  monthNumber: new Date().getMonth()+1,
  monthName: new Date().toLocaleDateString("default", {
      month: "long",
    }),
  tempMonthData: {},
  //
  ...initialScheduleState
}

const ScheduleContext = React.createContext()


const ScheduleProvider = ({children}) => {
    const [state, dispatch] = useReducer(scheduleReducer,initialState)
    //
    const clearScheduleData = () => {
      dispatch({type: CLEAR_WHOLE_SCHEDULE_DATA})
    }
    //
    const editScheduleTab = (newData) => {
      dispatch({type: EDIT_SCHEDULE_TAB, payload: newData})
    }
    //
    const deleteFromSchedule = (newData) => {
      dispatch({type: DELETE_FROM_SCHEDULE, payload: newData})
    }
    //
    const markActiveScheduleTab = (newData) => {
      dispatch({type: ACTIVE_SCHEDULE_TAB, payload: newData})
    }
    //
    const addToMainSchedule = (activity) => {
      dispatch({type: ADD_TO_MAIN_SCHEDULE, payload: activity})
    }
    //
    const setCurrentMonth = () => {
      dispatch({type: SET_CURRENT_MONTH})
    }
    //
    const updateCurrentDayHeader = (dayHeader) =>  {
      dispatch({type: UPDATE_CURRENT_DATE_HEADER, payload: dayHeader})
    }
    //
    const formatCurrentDate = () => {
      dispatch({type: FORMAT_CURRENT_DATE})
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
    const expiredSchedule = () => {
      dispatch({type: REMOVE_EXPIRED_SCHEDULE_DATA})
    }
    //
    useEffect(() => {
      expiredSchedule()
    }, [])
    //
    useEffect(() => {
      setCurrentMonth()
      formatCurrentDate()
    }, [])
    //
    useEffect(() => {
      localStorage.setItem(
        "scheduleOverallData",
        JSON.stringify(state.scheduleOverallData)
      );
    }, [state])
    //
    return (
      <ScheduleContext.Provider
        value={{
          ...state,
          updateTempMonth,
          incDecMonth,
          updateCurrentDayHeader,
          addToMainSchedule,
          markActiveScheduleTab,
          deleteFromSchedule,
          editScheduleTab,
          clearScheduleData,
        }}
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
