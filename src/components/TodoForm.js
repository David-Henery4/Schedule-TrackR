import React, { useEffect, useState } from 'react'
import { FaTimes } from "react-icons/fa";
import { BsCheckCircleFill} from "react-icons/bs";
import { useGlobalContext } from '../context/provider';
import {toast} from "react-toastify"



export const TodoForm = () => {
  const { activeInputs, inputFormClose, addTodo, todoData, handleEditTodo } =
    useGlobalContext();
  const { todoInput } = activeInputs;
  const [todoTitle,setTodoTitle] = useState("")
  const [todoWhen,setTodoWhen] = useState("")
  const [todoDesc,setTodoDesc] = useState("")
  const [formComplete, setFormCompleted] = useState(false)
  // Edit States
  const editActive = todoData.some(t => t.editActive)
  const [todoWhenEdit, setTodoWhenEdit] = useState("")
  const [todoTitleEdit, setTodoTitleEdit] = useState("")
  const [todoDescEdit, setTodoDescEdit] = useState("")
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
    toast.success("Todo created!", {
      hideProgressBar: false,
    });
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
  const handleEditUpdate = () => {
    const updatedTodo = todoData.map(t => {
      if (t.editActive){
        t.start =  todoWhenEdit;
        t.title = todoTitleEdit;
        t.todo = todoDescEdit;
        t.activeTodo = false;
        t.editActive = false;
        }
        return t
    })
    handleEditTodo(updatedTodo)
    toast.success("Todo has been edited!", {
      hideProgressBar: false,
    });
  }
  //
  const editMode = (edit) => {
    if (edit){
      const currentEdit = todoData.find(t => t.editActive === true)
      setTodoWhenEdit(currentEdit.start)
      setTodoTitleEdit(currentEdit.title)
      setTodoDescEdit(currentEdit.todo)
    }
  }
  //
  useEffect(() => {
    editMode(editActive);
    // eslint-disable-next-line
  }, [editActive])
  //
  
  //
  return (
    <div
      className={`${
        todoInput ? "todo-form-modal input-open" : "todo-form-modal"
      }`}
    >
      <div className="todo-form-container">
        <FaTimes className="exit-icon" onClick={() => {
          inputFormClose()
          resetInputs()
        }} />
        <form className="todo-form" onSubmit={(e) => e.preventDefault()}>
          <input
            value={editActive ? todoWhenEdit : todoWhen}
            className="todo-form__start-input input-basic"
            type="text"
            name="todo-when"
            id="todo-when"
            placeholder="When..."
            onChange={(e) => {
              if (editActive) {
                setTodoWhenEdit(e.target.value);
              } else {
                setTodoWhen(e.target.value);
              }
            }}
          />
          {/**/}
          <input
            value={editActive ? todoTitleEdit : todoTitle}
            className="input-basic todo-form__title-input"
            type="text"
            name="todo-title"
            id="todo-title"
            placeholder="Title..."
            onChange={(e) => {
              if (editActive) {
                setTodoTitleEdit(e.target.value);
              } else {
                setTodoTitle(e.target.value);
              }
            }}
          />
          {/**/}
          <textarea
            value={editActive ? todoDescEdit : todoDesc}
            className="input-basic todo-form__desc-input"
            name="todo-desc"
            id="todo-desc"
            placeholder="Description..."
            onChange={(e) => {
              if (editActive){
                setTodoDescEdit(e.target.value)
              } else{
                setTodoDesc(e.target.value);
              }
            }}
          ></textarea>
          {formComplete ? (
            <BsCheckCircleFill className="complete-icon" />
          ) : (
            <button
              className="btn"
              type="submit"
              onClick={() => {
                if (editActive){
                  handleEditUpdate()
                  handleFormCompletion();
                } else{
                  handleSubmit();
                  handleFormCompletion();
                }
              }}
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default TodoForm