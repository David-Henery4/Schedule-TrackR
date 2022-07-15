import { UPDATE_TEMP_MONTH, INCREASE_DECREASE_MONTH } from "./scheduleActions";

const scheduleReducer = (state, action) => {
  //
  if (action.type === UPDATE_TEMP_MONTH) {
    const updatedTempMonth = action.payload;
    return { ...state, tempMonthData: updatedTempMonth };
  }
  //
  if(action.type === INCREASE_DECREASE_MONTH){
    // Reminder: Inc over 12 = back to 1 & + 1 to year
    // Reminder: dec under 1 = back to 12 & -1 to year
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
