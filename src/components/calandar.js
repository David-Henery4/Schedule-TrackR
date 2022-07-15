import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/provider";
import { Link } from "react-router-dom";
import { getDatesObj } from "../data/calandarData";
import { useScheduleContext } from "../context/scheduleContext";

// CREATE DUMMY DATA TO LOOP OVER THE DATES
export const Calandar = () => {
  const { calandar, currentYear, currentMonth } = useGlobalContext();
  const {tempMonthData} = useScheduleContext()
  const [weeks, setWeeks] = useState(null);
  //
  const [tempMonthNumber, setTempMonthNumber] = useState();
  const [tempYear, setTempYear] = useState();
  const [tempMonth, setTempMonth] = useState();
  const [shownMonth, setShownMonth] = useState();
  //
  // MAYBE SET BACK TO CURRENT MONTH WHEN 'WEEKS' IS CLICKED ON
  //
  const handleMonthDataInput = () => {
    if (tempMonthData !== null){
      if (Object.entries(tempMonthData).length > 0) {
        const { monthNumber, year } = tempMonthData;
        setTempMonthNumber(monthNumber);
        setTempYear(year)
      }
    }
  };
  //
  const getTempMonthData = () => {
    const tempMonthDays = new Date(tempYear, tempMonthNumber, 0).getDate();
    const tempMonthData = getDatesObj(
      tempMonthDays,
      tempYear,
      tempMonthNumber
    );
    tempWeeksSplit(tempMonthData);
    // console.log(tempMonthNumber)
  };
  //
  const tempWeeksSplit = (monthData) => {
    setTempMonth({
      week1: monthData.slice(0, 7),
      week2: monthData.slice(7, 14),
      week3: monthData.slice(14, 21),
      week4: monthData.slice(21, 28),
      week5: monthData.slice(28, -1),
    });
  };
  //
  const weeksSplit = () => {
    if (calandar) {
      setWeeks({
        week1: calandar.slice(0, 7),
        week2: calandar.slice(7, 14),
        week3: calandar.slice(14, 21),
        week4: calandar.slice(21, 28),
        week5: calandar.slice(28, -1),
      });
    }
  };
  //
  const currentDisplayedMonth = () => {
    setShownMonth(weeks)
    if (tempMonthData !== null){
      if (Object.entries(tempMonthData).length > 0) {
        setShownMonth(tempMonth)
        // console.log("being called")
      } 
    }
  };
  //
  useEffect(() => {
    currentDisplayedMonth();
    // eslint-disable-next-line
  }, [weeks, tempMonth])
  //
  useEffect(() => {
    getTempMonthData();
    handleMonthDataInput();
    // eslint-disable-next-line
  }, [tempMonthNumber, tempMonthData]); // might need weeks
  //
  useEffect(() => {
    weeksSplit();
    // eslint-disable-next-line
  }, [calandar]);
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
        <div className="week-1 grid-item-position">
          {shownMonth &&
            shownMonth.week1.map((w, i) => {
              const { day } = w;
              return (
                <p key={i} className={`grid-item-position--${i + 1}`}>
                  <Link className="day-link" to="/currentday">
                    {day}
                  </Link>
                </p>
              );
            })}
        </div>
        <div className="week-2 grid-item-position">
          {shownMonth &&
            shownMonth.week2.map((w, i) => {
              const { day } = w;
              return (
                <p key={i} className={`grid-item-position--${i + 1}`}>
                  <Link className="day-link" to="/currentday">
                    {day}
                  </Link>
                </p>
              );
            })}
        </div>
        <div className="week-3 grid-item-position">
          {shownMonth &&
            shownMonth.week3.map((w, i) => {
              const { day } = w;
              return (
                <p key={i} className={`grid-item-position--${i + 1}`}>
                  <Link className="day-link" to="/currentday">
                    {day}
                  </Link>
                </p>
              );
            })}
        </div>
        <div className="week-4 grid-item-position">
          {shownMonth &&
            shownMonth.week4.map((w, i) => {
              const { day } = w;
              return (
                <p key={i} className={`grid-item-position--${i + 1}`}>
                  <Link className="day-link" to="/currentday">
                    {day}
                  </Link>
                </p>
              );
            })}
        </div>
        <div className="week-5 grid-item-position">
          {shownMonth &&
            shownMonth.week5.map((w, i) => {
              const { day } = w;
              return (
                <p key={i} className={`grid-item-position--${i + 1}`}>
                  <Link className="day-link" to="/currentday">
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
