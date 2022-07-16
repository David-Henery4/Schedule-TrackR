import {
  UPDATE_TEMP_MONTH,
  INCREASE_DECREASE_MONTH,
  SET_CURRENT_MONTH,
} from "./scheduleActions";

const scheduleReducer = (state, action) => {
  //
  if (action.type === SET_CURRENT_MONTH){
    const { monthNumber, year, monthName } = state;
    return {...state, tempMonthData: {monthNumber,year,monthName}}
  }
  //
  if (action.type === UPDATE_TEMP_MONTH) {
    const updatedTempMonth = action.payload;
    const { monthNumber, year, monthName } = state;
    return {
      ...state,
      tempMonthData: updatedTempMonth || { monthNumber, year, monthName },
    };
  }
  //
  if(action.type === INCREASE_DECREASE_MONTH){
    const value = action.payload
    let {monthNumber, year} = state.tempMonthData
    if (value === "inc"){
      monthNumber++
      if ( monthNumber > 12){
        monthNumber = 1
        year++
      }
    }
    if (value === "dec"){
      monthNumber--
      if (monthNumber < 1) {
        monthNumber = 12
        year--
      }
    }
    const monthName = new Date(year,monthNumber - 1).toLocaleDateString("default", {
      month: "long",
    });
    return{...state, tempMonthData: {monthNumber, monthName, year}}
  }
  //
  throw new Error(`No matching action type: ${action.type}`);
};

export default scheduleReducer;
