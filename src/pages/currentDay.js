import React from 'react'
import { useEffect } from 'react';
import { BsThreeDots } from "react-icons/bs";
import { useLocation } from 'react-router-dom';
import mockCurrentDayData from '../data/mockCurrentDay';

export const CurrentDay = () => {
  const {state} = useLocation()
  console.log(state)
  return (
    <section className="current-day">
      <div className="current-day-row">
        {mockCurrentDayData.map(d => {
          const {id, startTime, endTime, taskDesc, taskTitle} = d
          return (
            <div className="current-day-tab" key={id}>
              <h3 className="current-day__time">{startTime} - {endTime}</h3>
              <div className="current-day-content">
                <BsThreeDots className="current-day-edit-icon" />
                <h4 className="current-day-content__title">
                  {taskTitle}
                </h4>
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
}

export default CurrentDay