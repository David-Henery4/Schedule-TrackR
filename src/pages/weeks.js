import React from 'react'
import Calandar from '../components/calandar'

/**
 * Get the amount of days in a month (Based on the year & month)
 * @param {Number} Y Year
 * @param {Number} m Month
 * @returns Amount of days in a month
 */
const monthDays = (y,m) => {
  return new Date(y,m, 0).getDate()
}
//
const todayDate = new Date()
const thisYear = todayDate.getFullYear()
const thisMonth = todayDate.getMonth() + 1
//
const currentMonthDays = monthDays(thisYear,thisMonth)
/**
 * Creates an array from the amount of days from the 'monthDays function
 */
const currentAmountOfDays = []
for(let i = 0; i < currentMonthDays; i++){
  currentAmountOfDays.push(i+1)
}
//
const calandarData = {
  daysOfMonth: {
    date: [],
    name:[],
  },
  year: 0,
  month: ""
}
//
todayDate.setMonth(thisMonth - 1)
const monthString = todayDate.toLocaleString("default", { month: "long"});
calandarData.month = monthString
calandarData.year = thisYear
//
currentAmountOfDays.forEach((d,_,a) => {
  const dates = new Date(thisYear, thisMonth - 1, d);
  calandarData.daysOfMonth.date.push(d);
  const dayNames = dates.toLocaleDateString("default", { weekday: "short" });
  calandarData.daysOfMonth.name.push(dayNames);
  // might need to come back.
  // calandarData.daysOfMonth[dayNames] = [d]
})



console.log(calandarData)


export const Weeks = () => {
  return (
    <section className='weeks'>
      <Calandar/>
    </section>
  )
}

export default Weeks
