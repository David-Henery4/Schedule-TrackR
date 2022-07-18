import React from "react";
import { useEffect } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { useScheduleContext } from "../context/scheduleContext";
import mockCurrentDayData from "../data/mockCurrentDay";

export const CurrentDay = () => {
  const { todaysDateFormated, updateCurrentDayHeader } = useScheduleContext();

  const { state } = useLocation();
  // console.log(state)
  useEffect(() => {
    updateCurrentDayHeader(state) // Have to deal with null in the reducer!!! (ether with 'if' or '||' and use current as default.)
    // Happens because function is called even with no values from the calandar, and can't format no values!!!
    // Also maybe store date data from the calandar for the fullDates.
  }, [state]);
  return (
    <section className="current-day">
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
