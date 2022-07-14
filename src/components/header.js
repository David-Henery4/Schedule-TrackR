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
  const {tempMonthData} = useScheduleContext()
  const [currentMonthTitle, setCurrentMonthTitle] = useState("")
  const [tempMonthTitle, setTempMonthTitle] = useState("")
  //
  const getMonthTitle = () => {
    const currentDate = new Date()
    const currentMonth = currentDate.toLocaleDateString("default", {
      month: "long"
    })
    setCurrentMonthTitle(currentMonth);
    //
    if (tempMonthData !== null){
      const tempDataExists = Object.entries(tempMonthData).length;
      if (tempDataExists > 0){
        const {monthName} = tempMonthData
        setTempMonthTitle(monthName)
      }
    }
  }
  //
  const chooseMonthTitle = () => {
    if (tempMonthTitle === "") return currentMonthTitle;
    if (tempMonthTitle !== "") return tempMonthTitle;
  }
  //
  useEffect(() => {
    getMonthTitle();
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
  
  // 
  return (
    <section className="header-section">
      <MobileNav />
      <header className="header">
        <h1 className="header__logo">
          Schedule
          <span>TrackR</span>
        </h1>
        <p className="header__time">09:36</p>
        <h3 className="header__name">{activePageTitle()}</h3>
        <h4 className="header__date">
          Thursday 12th {!weeksHeader ? "june" : ""}
        </h4>
        {weeksHeader && (
          <div className="header__calandar-items">
            <BiChevronLeft className="header__calandar--right" />
            <h4 className="header__title">{chooseMonthTitle()}</h4>
            <BiChevronRight className="header__calandar--left" />
          </div>
        )}
        <IoIosAddCircle className="header__add-icon" onClick={inputFormOpen} />
      </header>
    </section>
  );
}

export default Header
