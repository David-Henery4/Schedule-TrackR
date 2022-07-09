import React, { useState } from 'react'
import { AiOutlineEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useGlobalContext } from '../context/provider';

export const EditDelete = ({ activeTodo,id }) => {
  const {todoData, deleteTodo, inputFormOpen, activeInputs, handleEditTodo} = useGlobalContext()
  // const {todoInputs} = activeInputs

  //
  const handleDelete = () => {
    const updatedData = todoData.filter(t => id !== t.id
    )
    deleteTodo(updatedData)
  }
  //
  const handleEdit = () => {
    const updatedData = todoData.map(t => {
      if (id === t.id){
        // console.log(t)
        t.editActive = true;
        // inputFormOpen()
      } else {
        t.editActive = false;
      }
      return t
    })
    handleEditTodo(updatedData)
  }
  //
  return (
    <div
      className={activeTodo ? "edit-delete-active edit-delete" : "edit-delete"}
    >
      {/* handleEdit was here onclick */}
      <button className="edit" onClick={handleEdit}> 
        Edit{" "}
        <span>
          <AiOutlineEdit className="edit-icon" />
        </span>
      </button>
      <button className="delete" onClick={handleDelete}>
        Delete{" "}
        <span>
          <MdDelete className="delete-icon" />
        </span>
      </button>
    </div>
  );
};

export default EditDelete 