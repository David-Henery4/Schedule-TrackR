import React from 'react'
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from '../context/provider';

export const TodoForm = () => {
  const {activeInputs} = useGlobalContext()
  const { todoInput } = activeInputs;
  // REMINDER: NEED TO CLOSE MODAL.
  return (
    <div className={`${todoInput ? "todo-form-modal input-open" : "todo-form-modal"}`}>
        <div className="todo-form-container">
            <FaTimes className='todo-exit-icon'/>
            <form className='todo-form'>
                <input className='todo-form__start-input input-basic' type="text" name="todo-when" id="todo-when" placeholder='When...'/>
                {/**/}
                <input className='input-basic todo-form__title-input' type="text" name="todo-title" id="todo-title" placeholder='Title...'/>
                {/**/}
                <textarea className='input-basic todo-form__desc-input' name="todo-desc" id="todo-desc" placeholder='Description...'></textarea>
                <button className='btn' type="submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default TodoForm