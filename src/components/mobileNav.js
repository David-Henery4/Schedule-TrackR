import React from 'react'
import {IoReorderThree} from "react-icons/io5"

export const MobileNav = () => {
  return (
    <>
    <nav className='navbar-mobile'>
        <div className="navbar-mobile__time">
            <p>16:21</p>
        </div>
        <div className="navbar-mobile__icon">
            <IoReorderThree className='burger'/>
        </div>
    </nav>
    </>
  )
}

export default MobileNav