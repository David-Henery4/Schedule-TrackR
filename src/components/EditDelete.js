import React from 'react'
import { AiOutlineEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useGlobalContext } from '../context/provider';
import { useScheduleContext } from '../context/scheduleContext';
import findActiveEditTab from '../utils/findTabToEdit';
import {toast} from "react-toastify"

export const EditDelete = ({ activeTab, id }) => {
  const { todoData, deleteTodo, inputFormOpen, handleEditTodo, activePage, goalsData, editGoal, deleteGoal } =
    useGlobalContext();
    const { scheduleOverallData, deleteFromSchedule, editScheduleTab } = useScheduleContext();
    const goalsPage = activePage.goalsHeader
    const todoPage = activePage.todoHeader
    const dayPage = activePage.currentHeader;
    const weekPage = activePage.weekHeader;
  //
  const handleDelete = () => {
    if (todoPage){
      const updatedData = todoData.filter((t) => id !== t.id);
      deleteTodo(updatedData);
      toast.success("Todo successfully removed!", {
        hideProgressBar: false,
      });
    }
    if (goalsPage){
      const updatedData = goalsData.filter((t) => id !== t.id);
      deleteGoal(updatedData)
      toast.success("Goal successfully removed!", {
        hideProgressBar: false,
      });
    }
    if (dayPage || weekPage){
      const updatedData = scheduleOverallData.filter((s) => id !== s.id)
      deleteFromSchedule(updatedData)
      toast.success("Schedule Activity successfully removed!", {
        hideProgressBar: false,
      });
    }
  };
  //
  const handleEdit = () => {
    if (todoPage){
      const updatedData = findActiveEditTab(id, todoData, inputFormOpen);
      handleEditTodo(updatedData);
    }
    if (goalsPage){
      const updatedData = findActiveEditTab(id, goalsData, inputFormOpen);
      editGoal(updatedData);
    }
    if (dayPage || weekPage){
      const updatedData = findActiveEditTab(id,scheduleOverallData, inputFormOpen);
      editScheduleTab(updatedData)
    }
  };
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