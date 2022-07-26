import React from 'react'
import { Link } from 'react-router-dom'
import { navigationDosGoals, navigationDates } from '../data/navbarData';

export const NavbarDesk = () => {
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
              <li key={id}>
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
              <li key={id}>
                <Link className="desk-nav-link" to={page}>
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

 export default NavbarDesk