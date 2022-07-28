import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import { navigationDosGoals, navigationDates } from '../data/navbarData';
import { useGlobalContext } from '../context/provider';
import { useScheduleContext } from '../context/scheduleContext';

export const NavbarDesk = () => {
  const { activePage, clearWholeTodoData, clearWholeGoalsData } =
    useGlobalContext();
  const { clearScheduleData } = useScheduleContext();
  const { goalsHeader, todoHeader } = activePage;
  //
  let location = useLocation()
  const {pathname} = location
  //
  const handleClearData = () => {
    if(todoHeader){ // clear todo data
      clearWholeTodoData()
    }
    else if (goalsHeader){ // clear goals data
      clearWholeGoalsData()
    }
    else { // clear schedule data
      clearScheduleData()
    }
  }
  //
  return (
    <aside className="desk-nav">
      <div className="desk-nav-content">
        <h4 className="desk-nav__logo">
          Schedule{" "}
          <span className="track">
            Track<span>R</span>
          </span>
        </h4>
        {/**/}
        <ul className="desk-nav-links desk-nav-links--schedule">
          {navigationDates.map((l) => {
            const { id, page, text } = l;
            return (
              <li key={id} className={pathname === page ? "active-page" : ""}>
                <Link className="desk-nav-link" to={page}>
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
        {/**/}
        <ul className="desk-nav-links desk-nav-links--todo-goals">
          {navigationDosGoals.map((l) => {
            const { id, page, text } = l;
            return (
              <li key={id} className={pathname === page ? "active-page" : ""}>
                <Link className="desk-nav-link" to={page}>
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
        {/**/}
        <button className='btn clear-btn' onClick={handleClearData}>Clear all {todoHeader ? "todo" : goalsHeader ? "goals" : "schedule"} data </button>
      </div>
    </aside>
  );
}

 export default NavbarDesk