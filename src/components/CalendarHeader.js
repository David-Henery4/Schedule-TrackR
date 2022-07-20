import React from "react";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

const CalendarHeader = ({ incDecMonth, tempYear, tempMonthTitle }) => {
  const handleMonthChanges = (change) => {
    incDecMonth(change);
  };
  return (
    <div className="header__calandar-items">
      <BiChevronLeft
        className="header__calandar--left"
        onClick={() => {
          handleMonthChanges("dec");
        }}
      />
      <h4 className="header__title">
        {tempMonthTitle} {tempYear}
      </h4>
      <BiChevronRight
        className="header__calandar--right"
        onClick={() => {
          handleMonthChanges("inc");
        }}
      />
    </div>
  );
};

export default CalendarHeader;
