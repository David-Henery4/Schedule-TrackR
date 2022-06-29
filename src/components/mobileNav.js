import React from 'react'
import {IoReorderThree} from "react-icons/io5"
import { useGlobalContext } from "../context/provider";

export const MobileNav = () => {
  const {openSidebar} = useGlobalContext()
  return (
    <>
    <nav className='navbar-mobile'>
        <div className="navbar-mobile__time">
            <p>16:21</p>
        </div>
        <div className="navbar-mobile__icon">
            <IoReorderThree className='burger' onClick={openSidebar}/>
        </div>
    </nav>
    </>
  )
}

export default MobileNav