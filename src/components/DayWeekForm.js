import React, { useState } from "react";
import { useEffect } from "react";
import { useScheduleContext } from "../context/scheduleContext";

// const currentDate = new Date(
//   `${todaysMonth}${todaysDate},${todaysYear}`
// );
// works so far with just temp date.

const DayWeekForm = () => {
const { dayPageHeaderDate, todaysDateFormated, addToMainSchedule } = useScheduleContext();
const { day, date, month, year } = dayPageHeaderDate;
//
const [time, setTime] = useState("");
const [title, setTitle] = useState("");
const [text, setText] = useState("");
//
const creatingActivity = (e) => {
    e.preventDefault()
    const tempDate = new Date(`${month}${date},${year}`);
    const id = new Date().getTime()
    const activity = {
        id,
        date: {date: tempDate, formatedDate: dayPageHeaderDate},
        dateStamp: +tempDate,
        time,
        title,
        text
    }
    addToMainSchedule(activity)
};
//
    return (
        <form className="dw-form">
        {/*TIME*/}
            <span className="dw-form__time">
            <label htmlFor="dw-time" className="dw-form__time--label">
                What time?
            </label>
            <input
                id="dw-time"
                name="dw-time"
                type="text"
                value={time}
                onChange={(e) => {
                setTime(e.target.value);
                }}
            />
            </span>
      {/*TITLE*/}
      <span className="dw-form__title">
        <label htmlFor="dw-title">Title</label>
        <input
          name="dw-title"
          id="dw-title"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </span>
      {/*TEXT*/}
      <span className="dw-form__text">
        <label htmlFor="dw-text">Activity</label>
        <textarea
          name="dw-text"
          id="dw-text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></textarea>
      </span>
      {/* SUBMIT BTN */}
      <button type="button" className="btn" onClick={creatingActivity}>
        Submit
      </button>
    </form>
  );
};

export default DayWeekForm;
