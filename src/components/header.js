import React from 'react'
import MobileNav from './mobileNav'


export const Header = () => {

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
          <h3 className="header__name">Months 2022</h3>
          <h4 className="header__date">June 12th</h4>
      </header>
    </section>
  );
}

export default Header
