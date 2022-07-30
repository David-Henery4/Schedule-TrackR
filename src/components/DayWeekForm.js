import React, { useState } from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../context/provider";
import { useScheduleContext } from "../context/scheduleContext";
import {toast} from "react-toastify"

const DayWeekForm = ({clearValue}) => {
const {
  dayPageHeaderDate,
  addToMainSchedule,
  scheduleOverallData,
  editScheduleTab,
} = useScheduleContext();
const { date, month, year } = dayPageHeaderDate;
const { inputFormClose } = useGlobalContext();
//
const editActive = scheduleOverallData.some(s => s.editActive)
//
const [startTime, setStartTime] = useState("");
const [endTime, setEndTime] = useState("");
const [title, setTitle] = useState("");
const [text, setText] = useState("");
//
const creatingActivity = (e) => {
    e.preventDefault()
    const tempDate = new Date(`${month}${date},${year}`);
    const id = new Date().getTime()
    const activity = {
      id,
      activeTab: false,
      editActive: false,
      date: { date: tempDate, formatedDate: dayPageHeaderDate },
      dateStamp: +tempDate,
      startTime,
      endTime,
      taskTitle: title,
      taskDesc: text,
    };
    addToMainSchedule(activity)
    toast.success("Schedule activity has been added!");
    closeAndClearAfterSubmit()
};
//
const creatingEditActivity = (e) => {
  e.preventDefault();
  const updatedTab = scheduleOverallData.map(s => {
    if (s.editActive){
      s.startTime  = startTime
      s.endTime = endTime
      s.taskTitle = title
      s.taskDesc = text
      s.editActive = false;
      s.activeTab = false;
    }
    return s
  })
  // set new array to the state
  editScheduleTab(updatedTab)
  toast.success("Schedule activity has been Edited!");
  closeAndClearAfterSubmit()
}
//
const setEditValues = (edit) => {
  if (edit){
    const currentTab = scheduleOverallData.find(s => s.editActive === true)
    setStartTime(currentTab.startTime);
    setEndTime(currentTab.endTime);
    setTitle(currentTab.taskTitle);
    setText(currentTab.taskDesc);
  }
}
//
const closeAndClearAfterSubmit = () => {
  setTimeout(() => {
    clearValues();
    inputFormClose();
  }, 2000);
};
//
const clearValues = () => {
  setStartTime("");
  setEndTime("");
  setText("");
  setTitle("");
};
//
useEffect(() => {
  clearValues()
}, [clearValue])
//
useEffect(() => {
  setEditValues(editActive);
  // eslint-disable-next-line
}, [editActive])
//
    return (
      <form className="dw-form">
        {/*TIME*/}
        <div className="dw-time-inputs-wrap">
          {/* Start Time */}
          <span className="dw-time-input">
            <label htmlFor="">Start time</label>
            <input
              id="dw__time-input--start"
              name="dw__time-input--start"
              type="time"
              value={startTime}
              onChange={(e) => {
                setStartTime(e.target.value);
              }}
              autocomplete="off"
            />
            {/* End Time */}
          </span>
          <span className="dw-time-input">
            <label htmlFor="">End time</label>
            <input
              id="dw__time-input--end"
              name="dw__time-input--end"
              type="time"
              value={endTime}
              autocomplete="off"
              onChange={(e) => {
                setEndTime(e.target.value);
              }}
            />
          </span>
        </div>
        {/*TITLE*/}
        <span className="dw-form__title">
          <label htmlFor="dw-title">Title</label>
          <input
            name="dw-title"
            id="dw-title"
            type="text"
            value={title}
            autocomplete="off"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </span>
        {/*TEXT*/}
        <span className="dw-form__text">
          <label htmlFor="dw-text">Activity</label>
          <textarea
            autocomplete="off"
            name="dw-text"
            id="dw-text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></textarea>
        </span>
        {/* SUBMIT BTN */}
        <button
          type="button"
          className="btn"
          onClick={(e) =>
            editActive ? creatingEditActivity(e) : creatingActivity(e)
          }
        >
          Submit
        </button>
      </form>
    );
};

export default DayWeekForm;
