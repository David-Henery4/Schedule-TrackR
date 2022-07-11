import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from '../context/provider';

export const GoalsForm = () => {
    const { activeInputs, inputFormClose, addGoal } = useGlobalContext();
    const {goalsInput} = activeInputs
    // input values
    const [goalDate,setGoalDate] = useState("")
    const [goalInput,setGoalInput] = useState("")
    //
    const [isEdit,setIsedit] = useState(false)
    //
    const handleSubmit = (e) => {
      const goalData = {
        id : Date.now(),
        goalDate,
        goalInput
      }
      addGoal(goalData)
      inputFormClose()
    }
    //
  return (
    <div
      className={`${
        goalsInput ? "todo-form-modal input-open" : "todo-form-modal"
      }`}
    >
      <div className="goals-form-container">
        <FaTimes className='exit-icon' onClick={inputFormClose}/>
        <form className='goals-form' onSubmit={(e) => e.preventDefault()}>
          <input onChange={(e) => {
            setGoalDate(e.target.value)
          }} type="text" className='goals-form__date' value={goalDate}/>
          <textarea onChange={(e) => {
            setGoalInput(e.target.value)
          }} name="goal" id="goal" className='goals-form__input' value={goalInput}></textarea>
          <button onClick={handleSubmit} type="submit" className='btn goals-form__submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default GoalsForm