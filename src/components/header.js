import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import MobileNav from './mobileNav'
import { TODOPATH, CURRENTDAYPATH, MONTHPATH,WEEKPATH,WEEKSPATH, GOALSPATH } from '../data/pathNames'
import { useGlobalContext } from '../context/provider'
import { IoIosAddCircle } from "react-icons/io";

export const Header = () => {
  const { selectActivePage, activePage, inputFormOpen} =
    useGlobalContext();
  const {todoHeader, goalsHeader, weekHeader, weeksHeader, monthHeader, currentHeader} = activePage
  let location = useLocation()
  //
  const activePageTitle = () => {
    if (todoHeader) return "To dos"
    if (goalsHeader) return "Goals"
    if (weekHeader) return "Current Week"
    if (weeksHeader) return "Weeks"
    if (monthHeader) return "Month"
    if (currentHeader) return "Current day"
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
  return (
    <section className="header-section">
      <MobileNav />
      <header className="header">
        <h1 className="header__logo">
          Schedule
          <span>
          TrackR
          </span>
        </h1>
        <p className='header__time'>09:36</p>
          <h3 className="header__name">{activePageTitle()}</h3>
          <h4 className="header__date">Thursday 12th June</h4>
          <IoIosAddCircle className='header__add-icon' onClick={inputFormOpen}/>
      </header>
    </section>
  );
}

export default Header
