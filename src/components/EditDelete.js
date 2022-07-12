import React from 'react'
import { AiOutlineEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useGlobalContext } from '../context/provider';

export const EditDelete = ({ activeTab, id }) => {
  const { todoData, deleteTodo, inputFormOpen, handleEditTodo, activePage, goalsData, editGoal, deleteGoal } =
    useGlobalContext();
    const goalsPage = activePage.goalsHeader
    const todoPage = activePage.todoHeader
  //
  const handleDelete = () => {
    if (todoPage){
      const updatedData = todoData.filter((t) => id !== t.id);
      deleteTodo(updatedData);
    }
    if (goalsPage){
      const updatedData = goalsData.filter((t) => id !== t.id);
      deleteGoal(updatedData)
    }
  };
  //
  const handleEdit = () => {
    if (todoPage){
      const updatedData = todoData.map((t) => {
        if (id === t.id) {
          t.editActive = true;
          inputFormOpen();
        } else {
          t.editActive = false;
        }
        return t;
      });
      handleEditTodo(updatedData);
    }
    if (goalsPage){
      handleGoalEdit()
    }
  };
  //
  const handleGoalEdit = () =>{
    const updatedData = goalsData.map((goal) => {
      if (id === goal.id) {
        goal.editActive = true;
        inputFormOpen();
      } else {
        goal.editActive = false;
      }
      return goal;
    });
    editGoal(updatedData)
  }
  //
  return (
    <div
      className={activeTab ? "edit-delete-active edit-delete" : "edit-delete"}
    >
      {/* handleEdit was here onclick */}
      <button className="edit" onClick={() => {
        handleEdit()
      }}>
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