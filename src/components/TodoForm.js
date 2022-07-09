import React, { useEffect, useState } from 'react'
import { FaTimes } from "react-icons/fa";
import { BsCheckCircleFill} from "react-icons/bs";
import { useGlobalContext } from '../context/provider';



export const TodoForm = () => {
  const { activeInputs, inputFormClose, addTodo, todoData } =
    useGlobalContext();
  const { todoInput } = activeInputs;
  const [todoTitle,setTodoTitle] = useState("")
  const [todoWhen,setTodoWhen] = useState("")
  const [todoDesc,setTodoDesc] = useState("")
  const [formComplete, setFormCompleted] = useState(false)
  //
  const editActive = todoData.some(t => t.editActive)
  const [isEdit,setIsEdit] = useState(false)
  //
  const handleSubmit = () => {
    addTodo({
      start: todoWhen,
      title: todoTitle,
      todo: todoDesc,
      activeTodo: false,
      editActive: false
    })
    resetInputs()
  }
  //
  const resetInputs = () => {
    setTodoDesc("")
    setTodoTitle("")
    setTodoWhen("")
  }
  //
  const handleFormCompletion = () => {
    setFormCompleted(true)
    setTimeout(() => {
      setFormCompleted(false)
      inputFormClose()
    }, 2000)
  }
  //
  const editMode = () => {
    
  }
  //
  useEffect(() => {
    setIsEdit(editActive)
    console.log(editActive) // true when edit button clicked
  }, [editActive])
  return (
    <div className={`${todoInput ? "todo-form-modal input-open" : "todo-form-modal"}`}>
        <div className="todo-form-container">
            <FaTimes className='todo-exit-icon' onClick={inputFormClose}/>
            <form className='todo-form' onSubmit={(e) => e.preventDefault()}>
                <input value={todoWhen} className='todo-form__start-input input-basic' type="text" name="todo-when" id="todo-when" placeholder='When...' onChange={(e) => {
                  setTodoWhen(e.target.value)
                }}/>
                {/**/}
                <input value={todoTitle} className='input-basic todo-form__title-input' type="text" name="todo-title" id="todo-title" placeholder='Title...' onChange={(e) => {
                  setTodoTitle(e.target.value)
                }}/>
                {/**/}
                <textarea value={todoDesc} className='input-basic todo-form__desc-input' name="todo-desc" id="todo-desc" placeholder='Description...' onChange={(e) => {
                  setTodoDesc(e.target.value)
                }}></textarea>
                {formComplete ? <BsCheckCircleFill className='complete-icon'/> : <button className='btn' type="submit" onClick={() => {
                  handleSubmit()
                  handleFormCompletion()
                }}>Submit</button>}
            </form>
        </div>
    </div>
  )
}

export default TodoForm