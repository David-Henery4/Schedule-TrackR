import React from 'react';
import {BsThreeDots} from "react-icons/bs";
import mockTodos from '../data/mockTodoData';
import { TodoForm, EditDelete } from '../components';
import { useGlobalContext } from '../context/provider'


export const Todo = () => {
  const {todoData, activeTodoTab} = useGlobalContext()
  //
  const handleEditClick = (id) => {
    const updatedData = todoData.map(t => {
      if (id === t.id) {
        t.activeTodo = !t.activeTodo
        t.editActive = false;
      }
      if (id !== t.id){
        t.activeTodo = false;
        t.editActive = false;
      }
      return t
    })
    activeTodoTab(updatedData)
  }
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
                  <EditDelete activeTab={activeTodo} id={id}className="edit-delete-comp"/>
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
