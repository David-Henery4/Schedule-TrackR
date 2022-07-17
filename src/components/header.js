import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import MobileNav from './mobileNav'
import { TODOPATH, CURRENTDAYPATH, MONTHPATH,WEEKPATH,WEEKSPATH, GOALSPATH } from '../data/pathNames'
import { useGlobalContext } from '../context/provider'
import { IoIosAddCircle } from "react-icons/io";
import { useScheduleContext } from '../context/scheduleContext'
import { useState } from 'react'
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

export const Header = () => {
  const { selectActivePage, activePage, inputFormOpen} =
    useGlobalContext();
  const {todoHeader, goalsHeader, weekHeader, weeksHeader, monthHeader, currentHeader} = activePage
  let location = useLocation()
  const { tempMonthData, incDecMonth, todaysDate, todaysDateFormated } =
    useScheduleContext();
  const {day,date,month,year} = todaysDateFormated;
  //
  const [time, setTime] = useState({
    hours: new Date().getHours(),
    mins: new Date().getMinutes()
  })
  const [tempYear, setTempYear] = useState("")
  const [tempMonthTitle, setTempMonthTitle] = useState("")
  //
  const handleMonthChanges = (change) => {
    incDecMonth(change)
  }
  //
  const getMonthTitleAndYear = () => {
    if (tempMonthData !== null){
      const tempDataExists = Object.entries(tempMonthData).length;
      if (tempDataExists > 0){
        const {monthName, year} = tempMonthData
        setTempMonthTitle(monthName)
        setTempYear(year)
      }
    }
  }
  //
  useEffect(() => {
    getMonthTitleAndYear();
    // eslint-disable-next-line
  }, [tempMonthData])
  //
  const activePageTitle = () => {
    if (todoHeader) return "To dos"
    if (goalsHeader) return "Goals"
    if (weekHeader) return "Current Week"
    if (weeksHeader) return "Weeks"
    if (monthHeader) return "Month"
    if (currentHeader) return "Day"
  }
  //
  useEffect(() => {
    const pages = {
      todoHeader: location.pathname === TODOPATH,
      goalsHeader: location.pathname === GOALSPATH,
      weekHeader: location.pathname === WEEKPATH,
      monthHeader: location.pathname === MONTHPATH,
      currentHeader: location.pathname === CURRENTDAYPATH,
      weeksHeader: location.pathname === WEEKSPATH,
    };
    selectActivePage(pages);
    // eslint-disable-next-line
  }, [location])
  //
  const getTime = () => {
      const hours = new Date().getHours();
      const mins = new Date().getMinutes();
      setTime({hours,mins})
  }
  //
  useEffect(() => {
    setInterval(() => {
      getTime()
    }, [1000]);
    // return () => clearInterval()
  }, [])
  //
  return (
    <section className="header-section">
      <MobileNav />
      <header className="header">
        <h1 className="header__logo">
          Schedule
          <span>TrackR</span>
        </h1>
        <p className="header__time">{`${time.hours} : ${time.mins}`}</p>
        <h3 className="header__name">{activePageTitle()}</h3>
        <h4 className="header__date">
          {Object.entries(todaysDateFormated).length <= 0
            ? "Loading..."
            : `${day} ${date} ${month} ${year}`}
        </h4>
        {weeksHeader && (
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
        )}
        <IoIosAddCircle className="header__add-icon" onClick={inputFormOpen} />
      </header>
    </section>
  );
}

export default Header
