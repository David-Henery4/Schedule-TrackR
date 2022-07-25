import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { useScheduleContext } from "../context/scheduleContext";
import { EditDelete } from "./EditDelete";
import handleEditClickSchedule from "../utils/handleEditClickSchedule";

// TODO: CREATING THE DELETE, EDIT AND POPUP MENU BY CHANGING THE 'EDITACTIVE' & 'ACTIVETAB' STATE VALUES.`

const CurrentDayCustom = ({ todaysActivities }) => {
  const { markActiveScheduleTab, scheduleOverallData } = useScheduleContext();

  const handleEditClick = (id) => {
    const updatedActiveTab = handleEditClickSchedule(id, scheduleOverallData);
    markActiveScheduleTab(updatedActiveTab)
  };

  return todaysActivities.map((d) => {
    const { id, startTime, endTime, taskDesc, taskTitle, activeTab } = d;
    return (
      <div className="current-day-tab" key={id}>
        <h3 className="current-day__time">
          {startTime} - {endTime}
        </h3>
        <div className="current-day-content">
          <BsThreeDots className="current-day-edit-icon" onClick={() => {
            handleEditClick(id)
          }} />
          <EditDelete activeTab={activeTab} id={id} />
          <h4 className="current-day-content__title">{taskTitle}</h4>
          <article className="current-day-content__desc">{taskDesc}</article>
        </div>
      </div>
    );
  });
};

export default CurrentDayCustom;
