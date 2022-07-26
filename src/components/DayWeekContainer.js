import React from 'react'
import DayWeekForm from './DayWeekForm';
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from '../context/provider';
import { useScheduleContext } from '../context/scheduleContext';
import { useState } from 'react';

// make form component
const DayWeekContainer = () => {
  const [clearValue,setClearValue] = useState(false)
  const { activeInputs, inputFormClose } = useGlobalContext();
  const { dayInput, weekInput } = activeInputs;
  //
  return (
    <div className={dayInput || weekInput ? "dw dw-active" : "dw"}>
      <FaTimes className="exit-icon" onClick={() => {
        inputFormClose()
        setClearValue(!clearValue)
      }} />
      <DayWeekForm clearValue={clearValue}/>
    </div>
  );
}

export default DayWeekContainer