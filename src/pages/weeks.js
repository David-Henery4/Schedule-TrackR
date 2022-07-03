import React from 'react'
import Calandar from '../components/calandar'

const monthDays = (y,m) => {
  return new Date(y,m, 0).getDate()
}
//
const todayDate = new Date()
const thisYear = todayDate.getFullYear()
const thisMonth = todayDate.getMonth() + 1
//
const currentMonthDays = monthDays(thisYear,thisMonth)
console.log(currentMonthDays)
console.log(monthDays(2023,2)) // feb next year
//


export const Weeks = () => {
  return (
    <section className='weeks'>
      <Calandar/>
    </section>
  )
}

export default Weeks
