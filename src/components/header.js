import React from 'react'
import MobileNav from './mobileNav'


export const Header = () => {

  return (
    <section className="header-section">
      <MobileNav />
      <header className="header">
        <h1 className="header__logo">
          Schedule
          <br />
          TrackR
        </h1>
        <div className="page-details">
          <h3 className="page-details__name">Months 2022</h3>
          <h4 className="page-details__date">June 12th</h4>
        </div>
      </header>
    </section>
  );
}

export default Header
