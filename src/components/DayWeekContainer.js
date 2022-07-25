import React from 'react'
import DayWeekForm from './DayWeekForm';
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from '../context/provider';

// make form component
const DayWeekContainer = () => {
    const { activeInputs, inputFormClose } = useGlobalContext();
    const {dayInput} = activeInputs
  return (
    <div className={dayInput ? "dw dw-active" : "dw"}>
      <FaTimes className="exit-icon" onClick={inputFormClose}/>
      <DayWeekForm />
    </div>
  );
}

export default DayWeekContainer