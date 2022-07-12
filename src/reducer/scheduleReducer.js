import { UPDATE_TEMP_MONTH } from "./scheduleActions"


const scheduleReducer = (state, action) => {
    //
    if (action.type === UPDATE_TEMP_MONTH){
        const updatedTempMonth = action.payload
        return {...state, tempMonthData: updatedTempMonth}
    }
    //
    throw new Error(`No matching action type: ${action.type}`);
}

export default scheduleReducer