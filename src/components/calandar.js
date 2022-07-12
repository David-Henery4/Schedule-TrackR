import React, { useEffect, useState } from 'react';
import { useGlobalContext } from "../context/provider";
import { Link } from 'react-router-dom';

// CREATE DUMMY DATA TO LOOP OVER THE DATES
export const Calandar = (monthData) => {
  const {calandar} = useGlobalContext()
  const [weeks,setWeeks] = useState(null)
  // console.log(monthData)
  //
  const weeksSplit = () => {
    if (calandar){
      setWeeks({
        week1 : calandar.slice(0,7),
        week2 : calandar.slice(7, 14),
        week3 : calandar.slice(14, 21),
        week4 : calandar.slice(21, 28),
        week5 : calandar.slice(28, -1),
      })
    }
  }
  //
  useEffect(() => {
    weeksSplit();
    // eslint-disable-next-line
  }, [calandar])
  // console.log(weeks)
  //
  return (
    <div className="calandar-container">
      <div className="calandar">
        <div className="week-days grid-item-position">
          {weeks &&
            weeks.week1.map((h, i) => {
              const { name } = h;
              return <h4 key={i}>{name}</h4>;
            })}
        </div>
        <div className="week-1 grid-item-position">
          {weeks &&
            weeks.week1.map((w, i) => {
              const { day } = w;
              return (
                <p key={i} className={`grid-item-position--${i + 1}`}>
                  <Link className='day-link' to="/currentday">{day}</Link>
                </p>
              );
            })}
        </div>
        <div className="week-2 grid-item-position">
          {weeks &&
            weeks.week2.map((w, i) => {
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
          {weeks &&
            weeks.week3.map((w, i) => {
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
          {weeks &&
            weeks.week4.map((w, i) => {
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
          {weeks &&
            weeks.week5.map((w, i) => {
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
}

export default Calandar