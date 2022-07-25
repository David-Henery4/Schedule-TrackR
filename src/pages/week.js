import React from "react";
import defaultWeekData from "../data/defaultWeekData";
import { WeekDay } from "../components/weekDay";
import { DayWeekContainer } from "../components";
import { useEffect } from "react";
import { getDatesObj } from "../data/calandarData";
import formatDate from "../utils/formatDate";
import { useState } from "react";
import { useScheduleContext } from "../context/scheduleContext";

export const Week = () => {
  const { scheduleOverallData } = useScheduleContext();
  const [datesOfTheWeek, setDatesOfTheWeek] = useState([])
  //
  const setCurrentWeek = () => {
    const datesOfWeek = []
    for (let i = 1; i < 8; i++){
      const mondayDate = new Date().getDate() - new Date().getDay() + i;
      const fullMondayDate = new Date(new Date().getFullYear(),new Date().getMonth(),mondayDate)
      const dateObj = {
        id: i,
        formatedDate: formatDate(fullMondayDate),
        weekDateStamp: +fullMondayDate,
        fullDates: fullMondayDate,
      }
      datesOfWeek.push(dateObj)
    }
    console.log(datesOfWeek)
    setDatesOfTheWeek(datesOfWeek)
  };
  //
  useEffect(() => {
    setCurrentWeek();
  }, [scheduleOverallData]);
  //
  return (
    <section className="week">
      {/* ?!?!?might have input form here?!?! (DAYWEEKCONTAINER) */}
      <div className="week-container">
        {datesOfTheWeek.map((d) => {
          const { id, formatedDate, weekDateStamp } = d;
          const {day, date} = formatedDate
          return (
            <div key={id} className="week-col">
              <div className="week-title">
                <h3>
                  {day} {date}
                </h3>
              </div>
              {scheduleOverallData.length < 1 ? defaultWeekData.map((t) => {
                const { id, dateStamp } = t;
                if (weekDateStamp === dateStamp){
                  return <WeekDay key={id} {...t} />;
                }
              }) : scheduleOverallData.map((t) => {
                const { id, dateStamp } = t;
                if (weekDateStamp === dateStamp){
                  return <WeekDay key={id} {...t} />;
                }
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Week;
