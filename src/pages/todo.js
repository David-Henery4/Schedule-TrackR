import React, { useEffect, useState } from 'react';
import {BsThreeDots} from "react-icons/bs";
import mockTodos from '../data/mockTodoData';
import { TodoForm, EditDelete } from '../components';
import { useGlobalContext } from '../context/provider'
// import { useGlobalContext } from '../context/provider'

export const Todo = () => {
  const {todoData, activeTodoTab} = useGlobalContext()
  // const [editActive, setEditActive] = useState(false)
  //
  const handleEditClick = (id) => {
    const updatedData = todoData.map(t => {
      if (id === t.id) {
        t.activeTodo = !t.activeTodo
      }
      if (id !== t.id){
        t.activeTodo = false;
      }
      return t
    })
    activeTodoTab(updatedData)
  }
  // COME BACK TOO
  // CLOSE EDIT MODAL ON BODY CLICK!
  // document.body.addEventListener("click", function(){
  //   console.log("body clicked")
  //   const updated = todoData.map(t => t.activeTodo = false)
  //   activeTodoTab(updated)
  // })
  //
  return (
    <section className="todo">
      <TodoForm />
      <div className="todo-row">
        {todoData.length < 1
          ? mockTodos.map((t) => {
              const { id, start, title, todo} = t;
              return (
                <div className="todo-tab" key={id}>
                  <p className="todo__start">{start}</p>
                  <BsThreeDots className="todo__edit" />
                  <h4 className="todo__title">{title}</h4>
                  <article className="todo__action">{todo}</article>
                </div>
              );
            })
          : todoData.map((t) => {
              const { id, start, title, todo, activeTodo } = t;
              return (
                <div className="todo-tab" key={id}>
                  <p className="todo__start">{start}</p>
                  <BsThreeDots className="todo__edit" onClick={() => {
                    handleEditClick(id)
                  }}/>
                  <EditDelete activeTodo={activeTodo} className="edit-delete-comp"/>
                  <h4 className="todo__title">{title}</h4>
                  <article className="todo__action">{todo}</article>
                </div>
              );
            })}
      </div>
    </section>
  );
}

export default Todo
