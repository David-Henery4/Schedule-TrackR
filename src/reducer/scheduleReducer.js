import {
  UPDATE_TEMP_MONTH,
  INCREASE_DECREASE_MONTH,
  SET_CURRENT_MONTH,
  FORMAT_CURRENT_DATE,
  UPDATE_CURRENT_DATE_HEADER,
} from "./scheduleActions";

const scheduleReducer = (state, action) => {
  //
  if (action.type === UPDATE_CURRENT_DATE_HEADER){
    const updatedOrDefault = action.payload ? action.payload.fullDates : new Date();
    // const updatedOrDefault = new Date();
    const formated = updatedOrDefault.toLocaleDateString("default", {
      month: "long",
      weekday: "long",
      year: "numeric",
      day: "numeric"
    });
    const formatedDate = {
      day: formated.split(" ").slice(0, 1).toString().slice(0,-1),
      date: formated.split(" ").slice(1, 2).toString(),
      month: formated.split(" ").slice(2, 3).toString(),
      year: formated.split(" ").slice(3, 4).toString(),
    };
    return { ...state, dayPageHeaderDate: formatedDate };
  }
  //
  if (action.type === FORMAT_CURRENT_DATE){
    const {todaysDate} = state
    const formated = todaysDate.toLocaleDateString("default", {
      month: "long",
      weekday: "long",
      year: "numeric",
      day: "numeric"
    });
    const formatedDate = {
      day: formated.split(" ").slice(0, 1).toString().slice(0,-1),
      date: formated.split(" ").slice(1, 2).toString(),
      month: formated.split(" ").slice(2, 3).toString(),
      year: formated.split(" ").slice(3, 4).toString(),
    };
    // console.log(formatedDate)
    return { ...state, todaysDateFormated: formatedDate };
  }
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
