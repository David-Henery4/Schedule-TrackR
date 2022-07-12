import React ,{ useContext, useReducer } from "react";
import scheduleReducer from "../reducer/scheduleReducer";

const initialState = {

}

const ScheduleContext = React.createContext()


const ScheduleProvider = ({children}) => {
    const [state, dispatch] = useReducer(scheduleReducer,initialState)
    
    return <ScheduleContext.Provider value={{...state}}>{children}</ScheduleContext.Provider>
}



export const useScheduleContext = () => {
    return useContext(ScheduleContext)
}


export {ScheduleProvider}