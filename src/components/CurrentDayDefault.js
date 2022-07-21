import React from 'react'
import { BsThreeDots } from "react-icons/bs";

const CurrentDayDefault = ({ mockCurrentDayData }) => {
  return mockCurrentDayData.map((d) => {
    const { id, startTime, endTime, taskDesc, taskTitle } = d;
    return (
      <div className="current-day-tab" key={id}>
        <h3 className="current-day__time">
          {startTime} - {endTime}
        </h3>
        <div className="current-day-content">
          <BsThreeDots className="current-day-edit-icon" />
          <h4 className="current-day-content__title">{taskTitle}</h4>
          <article className="current-day-content__desc">{taskDesc}</article>
        </div>
      </div>
    );
  });
};

export default CurrentDayDefault