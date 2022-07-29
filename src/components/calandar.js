import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDatesObj } from "../data/calandarData";
import { useScheduleContext } from "../context/scheduleContext";

export const Calandar = () => {
  const { tempMonthData } = useScheduleContext();
  //
  const [tempMonthNumber, setTempMonthNumber] = useState();
  const [tempYear, setTempYear] = useState();
  const [tempMonth, setTempMonth] = useState();
  const [shownMonth, setShownMonth] = useState();
  //
  const handleMonthDataInput = () => {
    if (tempMonthData !== null) {
      if (Object.entries(tempMonthData).length > 0) {
        const { monthNumber, year } = tempMonthData;
        setTempMonthNumber(monthNumber);
        setTempYear(year);
      }
    }
  };
  //
  const getTempMonthData = () => {
    const tempMonthDays = new Date(tempYear, tempMonthNumber, 0).getDate();
    const tempMonthData = getDatesObj(tempMonthDays, tempYear, tempMonthNumber);
    tempWeeksSplit(tempMonthData);
  };
  //
  const tempWeeksSplit = (monthData) => {
    setTempMonth({
      week1: monthData.slice(0, 7),
      week2: monthData.slice(7, 14),
      week3: monthData.slice(14, 21),
      week4: monthData.slice(21, 28),
      week5: monthData.slice(28),
    });
  };
  //
  const currentDisplayedMonth = () => {
    if (tempMonthData !== null) {
      if (Object.entries(tempMonthData).length > 0) {
        setShownMonth(tempMonth);
      }
    }
  };
  //
  const activeMonth = () => {
    const currentMonth = new Date().getMonth() + 1
    const currentYear = new Date().getFullYear()
    if (tempMonthNumber === currentMonth && tempYear === currentYear){
      return true
    } else {
      return false
    }
  }
  //
  useEffect(() => {
    currentDisplayedMonth();
    // eslint-disable-next-line
  }, [tempMonth]);
  //
  useEffect(() => {
    getTempMonthData();
    handleMonthDataInput();
    // eslint-disable-next-line
  }, [tempMonthNumber, tempMonthData]);
  //
  return (
    <div className="calandar-container">
      <div className="calandar">
        <div className="week-days grid-item-position">
          {shownMonth &&
            shownMonth.week1.map((h, i) => {
              const { name } = h;
              return <h4 key={i}>{name}</h4>;
            })}
        </div>
        <div
          className={
            shownMonth &&
            shownMonth.week1.some((d) => {
              return d.day >= 1 && d.day <= 7 && d.day === new Date().getDate();
            }) &&
            activeMonth()
              ? "week-1 grid-item-position active-week"
              : "week-1 grid-item-position"
          }
        >
          {shownMonth &&
            shownMonth.week1.map((w, i) => {
              const { day } = w;
              return (
                <p key={i} className={`grid-item-position--${i + 1}`}>
                  <Link className="day-link" to={"/currentday"} state={w}>
                    {day}
                  </Link>
                </p>
              );
            })}
        </div>
        <div
          className={
            shownMonth &&
            shownMonth.week2.some((d) => {
              return (
                d.day >= 8 && d.day <= 14 && d.day === new Date().getDate()
              );
            }) &&
            activeMonth()
              ? "week-2 grid-item-position active-week"
              : "week-2 grid-item-position"
          }
        >
          {shownMonth &&
            shownMonth.week2.map((w, i) => {
              const { day } = w;
              return (
                <p key={i} className={`grid-item-position--${i + 1}`}>
                  <Link className="day-link" to="/currentday" state={w}>
                    {day}
                  </Link>
                </p>
              );
            })}
        </div>
        <div
          className={
            shownMonth &&
            shownMonth.week3.some((d) => {
              return (
                d.day >= 15 && d.day <= 21 && d.day === new Date().getDate()
              );
            }) &&
            activeMonth()
              ? "week-3 grid-item-position active-week"
              : "week-3 grid-item-position"
          }
        >
          {shownMonth &&
            shownMonth.week3.map((w, i) => {
              const { day } = w;
              return (
                <p key={i} className={`grid-item-position--${i + 1}`}>
                  <Link className="day-link" to="/currentday" state={w}>
                    {day}
                  </Link>
                </p>
              );
            })}
        </div>
        <div
          className={
            shownMonth &&
            shownMonth.week4.some((d) => {
              return (
                d.day >= 22 && d.day <= 28 && d.day === new Date().getDate()
              );
            }) &&
            activeMonth()
              ? "week-4 grid-item-position active-week"
              : "week-4 grid-item-position"
          }
        >
          {shownMonth &&
            shownMonth.week4.map((w, i) => {
              const { day } = w;
              return (
                <p key={i} className={`grid-item-position--${i + 1}`}>
                  <Link className="day-link" to="/currentday" state={w}>
                    {day}
                  </Link>
                </p>
              );
            })}
        </div>
        <div
          className={
            shownMonth &&
            shownMonth.week5.some((d) => {
              return (
                d.day >= 29 && d.day <= 31 && d.day === new Date().getDate()
              );
            }) &&
            activeMonth()
              ? "week-5 grid-item-position active-week"
              : "week-5 grid-item-position"
          }
        >
          {shownMonth &&
            shownMonth.week5.map((w, i) => {
              const { day } = w;
              return (
                <p key={i} className={`grid-item-position--${i + 1}`}>
                  <Link className="day-link" to="/currentday" state={w}>
                    {day}
                  </Link>
                </p>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Calandar;
