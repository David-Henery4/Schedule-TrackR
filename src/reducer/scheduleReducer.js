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
} from "./scheduleActions";
import formatDate from "../utils/formatDate";

const scheduleReducer = (state, action) => {


  // EDIT SCHEDULE TAB & // UPDATE EDIT SCHEDULE TAB
  if (action.type === EDIT_SCHEDULE_TAB) {
    const updatedRay = action.payload;
    return { ...state, scheduleOverallData: updatedRay };
  }

  // DELETEING FROM SCHEDULE
  if (action.type === DELETE_FROM_SCHEDULE) {
    const updatedRay = action.payload;
    return { ...state, scheduleOverallData: updatedRay };
  }

  // MARKING ACTIVE SCHEDULE TAB
  if (action.type === ACTIVE_SCHEDULE_TAB) {
    const updatedRay = action.payload;
    return { ...state, scheduleOverallData: updatedRay };
  }

  // ADDING OBJECTS/ACTIVITIES TO MAIN SCHEDULE ARRAY
  if (action.type === ADD_TO_MAIN_SCHEDULE) {
    const newItem = action.payload;
    return {
      ...state,
      scheduleOverallData: [...state.scheduleOverallData, newItem].sort((a,b) => (a.startTime > b.startTime) ?  1: -1),
    };
  }

  // DISPLAYING FORMATED DATES FOR THE CURRENT DAYS
  if (action.type === UPDATE_CURRENT_DATE_HEADER) {
    const updatedOrDefault = action.payload
      ? action.payload.fullDates
      : new Date();
    const formated = formatDate(updatedOrDefault);
    return { ...state, dayPageHeaderDate: formated };
  }
  //
  if (action.type === FORMAT_CURRENT_DATE) {
    const { todaysDate } = state;
    const formated = formatDate(todaysDate);
    return { ...state, todaysDateFormated: formated };
  }

  // SETTING THE CURRENT DATES IN THE MONTH IN THE CALENDAR
  if (action.type === SET_CURRENT_MONTH) {
    const { monthNumber, year, monthName } = state;
    return { ...state, tempMonthData: { monthNumber, year, monthName } };
  }
  // SETTING THE CHANGING DATES OF THE MONTH IN THE CALENDAR
  if (action.type === UPDATE_TEMP_MONTH) {
    const updatedTempMonth = action.payload;
    const { monthNumber, year, monthName } = state;
    return {
      ...state,
      tempMonthData: updatedTempMonth || { monthNumber, year, monthName },
    };
  }

  // INCREMENT THOUGH CALENDAR MONTHS DATES LOGIC
  if (action.type === INCREASE_DECREASE_MONTH) {
    const value = action.payload;
    let { monthNumber, year } = state.tempMonthData;
    if (value === "inc") {
      monthNumber++;
      if (monthNumber > 12) {
        monthNumber = 1;
        year++;
      }
    }
    if (value === "dec") {
      monthNumber--;
      if (monthNumber < 1) {
        monthNumber = 12;
        year--;
      }
    }
    const monthName = new Date(year, monthNumber - 1).toLocaleDateString(
      "default",
      {
        month: "long",
      }
    );
    return { ...state, tempMonthData: { monthNumber, monthName, year } };
  }
  //
  throw new Error(`No matching action type: ${action.type}`);
};

export default scheduleReducer;
