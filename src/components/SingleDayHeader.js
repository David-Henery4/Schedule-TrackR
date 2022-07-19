import React from 'react'
import { useEffect } from 'react';

const SingleDayHeader = ({ dayPageHeaderDate, todaysDateFormated }) => {
  const { day, date, month, year } = dayPageHeaderDate;
  const {date: todaysDate, month: todaysMonth, year: todaysYear } = todaysDateFormated
  //
  const compareDates = () => {
    const todaysDateString = new Date(`${todaysMonth}${todaysDate},${todaysYear}`)
    const dayPageDate = new Date(`${month}${date},${year}`);
    return +todaysDateString === +dayPageDate;
  };
  //
  useEffect(() => {
    compareDates();
    // eslint-disable-next-line
  }, [dayPageHeaderDate]);
  //
  return (
    <div className="header__current-day-title">
      <h4>
        {compareDates()
          ? ""
          : `${day} ${date} ${month} ${year}`}
      </h4>
    </div>
  );
};

export default SingleDayHeader