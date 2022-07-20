import React from "react";
import { useEffect } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { useScheduleContext } from "../context/scheduleContext";
import mockCurrentDayData from "../data/mockCurrentDay";
import { DayWeekContainer } from "../components";

export const CurrentDay = () => {
  const { state } = useLocation();
  //
  const {
    updateCurrentDayHeader,
    scheduleOverallData,
    dayPageHeaderDate,
    todaysDateFormated,
  } = useScheduleContext();
  const {date, month, year } = dayPageHeaderDate;
  const {date: todaysDate, month: todaysMonth, year: todaysYear,
  } = todaysDateFormated;
  //
  const comparingDates = () => {
    // WAS HERE!!!!!!!!!
    // (COMPARE ACTIVITY OBJECTS IN THE LIST TO THE CUSTOM DATE & DISPLAY THE RELEVENT JOB!!!)
    // might not need current.
    // const currentDate = new Date(`${todaysMonth}${todaysDate},${todaysYear}`);
    // console.log(+currentDate)
    const customDate = new Date(`${month}${date},${year}`);
    console.log(+customDate)
  }
  //
  useEffect(() => {
    comparingDates()
  }, [dayPageHeaderDate, todaysDateFormated])
  //
  useEffect(() => {
    updateCurrentDayHeader(state);
    // eslint-disable-next-line
  }, [state]);
  return (
    <section className="current-day">
      <DayWeekContainer/>
      <div className="current-day-row">
        {mockCurrentDayData.map((d) => {
          const { id, startTime, endTime, taskDesc, taskTitle } = d;
          return (
            <div className="current-day-tab" key={id}>
              <h3 className="current-day__time">
                {startTime} - {endTime}
              </h3>
              <div className="current-day-content">
                <BsThreeDots className="current-day-edit-icon" />
                <h4 className="current-day-content__title">{taskTitle}</h4>
                <article className="current-day-content__desc">
                  {taskDesc}
                </article>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CurrentDay;
