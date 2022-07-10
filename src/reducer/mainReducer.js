// import { type } from "@testing-library/user-event/dist/type";
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
  EDIT_TODO
} from "../reducer/actions";
import { getDatesObj } from "../data/calandarData";



const mainReducer = (state, action) => {
    if (action.type === SIDEBAR_ACTIVE){
        return {...state, sidebarActive: true}
    }
    //
    if (action.type === SIDEBAR_CLOSED){
        return {...state, sidebarActive: false}
    }
    //
    if (action.type === SET_ACTIVE_PAGE){
        return {...state, activePage: {...action.payload}}
    }
    //
    if (action.type === GET_INITIAL_CALANDAR_DATA) {
        const currentDate = new Date()
        const { year, month } = action.payload;
        let tempDays = new Date(year, month, 0).getDate();
        let tempMonth = currentDate.getMonth() + 1
        let tempYear = currentDate.getFullYear();
        currentDate.setMonth(tempMonth - 1);
        const monthString = currentDate.toLocaleString("default", {
            month: "long",
        });
        const calandar = getDatesObj(tempDays, tempYear, tempMonth);
        // monthString, tempMonth, tempYear, tempDays;
        return { ...state, calandar, monthString, tempDays, tempMonth, tempYear };
    }
    //
    if (action.type === INPUT_ACTIVE){
        if (state.activePage.todoHeader){
            const {activeInputs} = state
            return {...state, activeInputs: {...activeInputs,todoInput: true }
            };
        }
        return {...state}
    }
    //
    if (action.type === INPUT_CLOSE){
        if (state.activePage.todoHeader) {
            const { activeInputs } = state;
            return {
                ...state,
                activeInputs: { ...activeInputs, todoInput: false },
            };
        }
        return { ...state };
    }
    //
    if (action.type === ADD_TODO){
        if (state.activePage.todoHeader){
            // dont think todo data copy needed
            const {todoData} = state
            const id = Date.now()
            action.payload.id = id
            const newData = [...state.todoData, action.payload]
            return {...state, todoData: newData}
        }
        return{...state}
    }
    //
    if (action.type === ACTIVE_TODO_TAB) {
        return { ...state, todoData: action.payload};
    }
    //
    if (action.type === DELETE_TODO){
        const newData = action.payload
        return {...state, todoData: newData}
    }
    //
    if (action.type === EDIT_TODO){
        const newData = action.payload
        return{...state, todoData: newData}
    }
    //
    throw new Error(`No matching action type: ${action.type}`);
}

export default mainReducer