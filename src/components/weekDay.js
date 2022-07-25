import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import { useScheduleContext } from '../context/scheduleContext';
import handleEditClickSchedule from '../utils/handleEditClickSchedule';
import EditDelete from './EditDelete';

export const WeekDay = ({id,startTime, endTime, taskTitle, taskDesc, activeTab}) => {
  const { markActiveScheduleTab, scheduleOverallData } = useScheduleContext()
  //
  const handleEditClick = () => {
    const updatedActiveTab = handleEditClickSchedule(id, scheduleOverallData);
    markActiveScheduleTab(updatedActiveTab);
  }
  //
  return (
    <div className="week-tab">
      <p className="week__times">
        {startTime} - {endTime}
      </p>
      <BsThreeDots className="week__edit-icon" onClick={handleEditClick}/>
      <EditDelete activeTab={activeTab} id={id} />
      <h4 className="week__activity-title">{taskTitle}</h4>
      <article className="week__activity-desc">{taskDesc}</article>
    </div>
  );
}
