import React, { useState } from 'react'
import { AiOutlineEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

export const EditDelete = ({ activeTodo }) => {
    // solve click OFF edit issue later
  return (
    <div
      className={activeTodo ? "edit-delete-active edit-delete" : "edit-delete"}
    >
      <button className="edit">
        Edit{" "}
        <span>
          <AiOutlineEdit className="edit-icon" />
        </span>
      </button>
      <button className="delete">
        Delete{" "}
        <span>
          <MdDelete className="delete-icon" />
        </span>
      </button>
    </div>
  );
};

export default EditDelete 