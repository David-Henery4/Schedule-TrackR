import React from 'react'
import defaultWeekData from '../data/defaultWeekData';
import { WeekDay } from '../components/weekDay';
import { DayWeekContainer } from '../components';

export const Week = () => {
  return (
    <section className="week">
      {/* ?!?!?might have input form here?!?! */}
      <div className="week-container">
        {defaultWeekData.map(d => {
          const {id,date,day,tasks} = d
          return (
            <div key={id} className="week-col">
              <div className="week-title">
                <h3>{day} {date}</h3>
              </div>
              {tasks.map(t => {
                const {id} = t
                return <WeekDay key={id} {...t}/>
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Week