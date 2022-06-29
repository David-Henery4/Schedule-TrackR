import React from 'react'
import {BsThreeDots} from "react-icons/bs"
import mockTodos from '../data/mockTodoData'

export const Todo = () => {
  return (
    <section className='todo'>
      <div className="todo-row">
        {mockTodos.map((t) => {
          const {id,start,title,todo} = t
          return (
            <div className="todo-tab" key={id}>
              <p className="todo__start">{start}</p>
              <BsThreeDots className="todo__edit" />
              <h4 className="todo__title">{title}</h4>
              <article className="todo__action">
                {todo}
              </article>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default Todo
