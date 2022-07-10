import React from 'react'
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from '../context/provider';

export const GoalsForm = () => {
    const { activeInputs, inputFormClose } = useGlobalContext();
    const {goalsInput} = activeInputs
  return (
    <div
      className={`${
        goalsInput ? "todo-form-modal input-open" : "todo-form-modal"
      }`}
    >
      <div className="goals-form-container">
        <FaTimes className='exit-icon' onClick={inputFormClose}/>
        <form className='goals-form'>
          <input type="text" className='goals-form__date'/>
          <textarea name="goal" id="goal" className='goals-form__input'></textarea>
          <button type="submit" className='btn goals-form__submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default GoalsForm