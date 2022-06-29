import React from 'react'
import { BsThreeDots } from "react-icons/bs";

export const WeekDay = ({startTime,endTime,title, activity}) => {
  return (
    <div className="week-tab">
      <p className="week__times">
        {startTime} - {endTime}
      </p>
      <BsThreeDots className="week__edit-icon" />
      <h4 className="week__activity-title">{title}</h4>
      <article className="week__activity-desc">{activity}</article>
    </div>
  );
}
