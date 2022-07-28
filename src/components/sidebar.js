import React from 'react'
import {FaTimes} from "react-icons/fa"
import { navigationDates, navigationDosGoals } from '../data/navbarData'
import { useGlobalContext } from '../context/provider'
import { useScheduleContext } from '../context/scheduleContext'
import {Link, useLocation} from "react-router-dom"
// make Links!

export const Sidebar = () => {
  const {
    closeSidebar,
    sidebarActive,
    clearWholeTodoData,
    clearWholeGoalsData,
    activePage
  } = useGlobalContext();
  const { clearScheduleData } = useScheduleContext();
  let location = useLocation()
  const {pathname} = location
  const {todoHeader,goalsHeader} = activePage
  //
  const handleClearData = () => {
    if (todoHeader) {
      // clear todo data
      clearWholeTodoData();
    } else if (goalsHeader) {
      // clear goals data
      clearWholeGoalsData();
    } else {
      // clear schedule data
      clearScheduleData();
    }
  };
  return (
    <aside
      className={`${sidebarActive ? "sidebar sidebar-active" : "sidebar"}`}
    >
      {/**/}
      <FaTimes className="sidebar-icon" onClick={closeSidebar} />
      <div className="sidebar__logo">
        <p>
          Schedule <br /> Track<span>R</span>
        </p>
      </div>
      {/**/}
      <div className="sidebar__dates-links">
        <ul className="sidebar__list">
          {navigationDates.map((link) => {
            const { id, text, page } = link;
            return (
              <Link
                key={id}
                to={page}
                className={
                  pathname === page
                    ? "active-page sidebar__list--item"
                    : "sidebar__list--item"
                }
                onClick={closeSidebar}
              >
                {text}
              </Link>
            );
          })}
        </ul>
      </div>
      {/**/}
      <div className="sidebar__goals-dos-links">
        <ul className="sidebar__list">
          {navigationDosGoals.map((link) => {
            const { id, text, page } = link;
            return (
              <Link
                key={id}
                to={page}
                className={
                  pathname === page
                    ? "active-page sidebar__list--item"
                    : "sidebar__list--item"
                }
                onClick={closeSidebar}
              >
                {text}
              </Link>
            );
          })}
        </ul>
      </div>
      <button className="btn clear-btn" onClick={handleClearData}>
        Clear all {todoHeader ? "todo" : goalsHeader ? "goals" : "schedule"}{" "}
        data{" "}
      </button>
    </aside>
  );
}

export default Sidebar