import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useScheduleContext } from "../context/scheduleContext";
import mockCurrentDayData from "../data/mockCurrentDay";
import { DayWeekContainer, CurrentDayCustom, CurrentDayDefault } from "../components";
import { useState } from "react";

// might not need current.
// const currentDate = new Date(`${todaysMonth{todaysDate},${todaysYear}`);
// console.log(+currentDate)
// const {
//   date: todaysDate,
//   month: todaysMonth,
//   year: todaysYear,
// } = todaysDateFormated;
// todaysDateFormated

export const CurrentDay = () => {
  const { state } = useLocation();
  const [tempDate,setTempDate] = useState();
  const [todaysActivities, setTodaysActivities] = useState([])
  //
  const {
    updateCurrentDayHeader,
    scheduleOverallData,
    dayPageHeaderDate,
  } = useScheduleContext();
  const {date, month, year } = dayPageHeaderDate;
  //
  const comparingDates = () => {
    const customDate = new Date(`${month}${date},${year}`);
    setTempDate(+customDate)
  }
  //
  const todayActivities = () => {
    const scheduleData = scheduleOverallData.slice()
    const currentActivities = scheduleData.filter((a) => a.dateStamp === tempDate)
    // console.log(scheduleData)
    // console.log(currentActivities)
    setTodaysActivities(currentActivities)
  }
  //
  useEffect(() => {
    todayActivities();
    // eslint-disable-next-line
  }, [tempDate,scheduleOverallData])
  //
  useEffect(() => {
    comparingDates();
    // eslint-disable-next-line
  }, [dayPageHeaderDate])
  //
  useEffect(() => {
    updateCurrentDayHeader(state);
    // eslint-disable-next-line
  }, [state]);
  //
  return (
    <section className="current-day">
      <DayWeekContainer />
      <div className="current-day-row">
        {todaysActivities <= 0 ? (
          <CurrentDayDefault mockCurrentDayData={mockCurrentDayData}/>
        ) : (
          <CurrentDayCustom todaysActivities={todaysActivities} />
        )}
      </div>
    </section>
  );
};

export default CurrentDay;
