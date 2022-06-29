import React from 'react'
import { BsThreeDots } from "react-icons/bs";

export const CurrentDay = () => {
  return (
    <section className='current-day'>
      <div className="current-day-row">
        <div className="current-day-tab">
          <h3 className='current-day__time'>09:00 - 10:00</h3>
          <div className="current-day__content">
            <h4>Drop the washing off</h4>
            <article>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis id possimus illum, impedit distinctio facere sit officiis itaque! Nam nihil rem veniam earum est. Ut eos nulla nisi, ea itaque in dolorem architecto odit.</article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CurrentDay