import React, { useState } from "react";
import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from '../context/provider';
import { BsCheckCircleFill } from "react-icons/bs";
import {toast} from "react-toastify"

export const GoalsForm = () => {
    const { activeInputs, inputFormClose, addGoal, goalsData, editGoal } = useGlobalContext();
    const {goalsInput} = activeInputs
    const currentEdit = goalsData.some(goal => goal.editActive)
    const [formCompleted,setFormCompleted] = useState(false)
    // input values
    const [goalDate,setGoalDate] = useState("")
    const [goalInput,setGoalInput] = useState("")
    // Edit Values
    // const [isEditActive, setIsEditActive] = useState(false)
    const [editGoalDate, setEditGoalDate] = useState("")
    const [editGoalInput, setEditGoalInput] = useState("")
    //
    const handleSubmit = (e) => {
      const goalData = {
        id: Date.now(),
        goalDate,
        goalInput,
        activeTab: false,
        editActive: false,
        checkedSuccess: false,
        checkedFailed: false,
      };
      addGoal(goalData)
      toast.success("Goal has been added!", {
        hideProgressBar: false,
      });
      // inputFormClose()
      resetInputs()
    }
    //
    const resetInputs = () => {
      setGoalDate("")
      setGoalInput("")
    };
    //
    const handleFormCompletion = () => {
      setFormCompleted(true);
      setTimeout(() => {
        setFormCompleted(false);
        inputFormClose();
      }, 2000);
    }
    //
    const handleEditUpdate = () => {
      const updatedData = goalsData.map(goal => {
        if (goal.editActive){
          goal.goalDate = editGoalDate
          goal.goalInput = editGoalInput
          goal.editActive = false
          goal.activeTab = false;
        }
        return goal
      })
      editGoal(updatedData)
      toast.success("Goal has been edited!", {
        hideProgressBar: false,
      });
      // inputFormClose();
    }
    //
    const setEdit = (edit) => {
      if (edit){
        const currentGoalEdit = goalsData.find(goal => goal.editActive === true)
        setEditGoalDate(currentGoalEdit.goalDate);
        setEditGoalInput(currentGoalEdit.goalInput);
      }
    }
    //
    useEffect(() => {
      setEdit(currentEdit);
      // eslint-disable-next-line
    }, [currentEdit])
    //
  return (
    <div
      className={`${
        goalsInput ? "todo-form-modal input-open" : "todo-form-modal"
      }`}
    >
      <div className="goals-form-container">
        <FaTimes className="exit-icon" onClick={() => {
          inputFormClose()
          resetInputs()
        }} />
        <form className="goals-form" onSubmit={(e) => e.preventDefault()}>
          <input
            onChange={(e) => {
              if (currentEdit) {
                setEditGoalDate(e.target.value);
              } else {
                setGoalDate(e.target.value);
              }
            }}
            type="text"
            className="goals-form__date"
            placeholder="Timeframe..."
            value={currentEdit ? editGoalDate : goalDate}
          />
          <textarea
            onChange={(e) => {
              if (currentEdit) {
                setEditGoalInput(e.target.value);
              } else {
                setGoalInput(e.target.value);
              }
            }}
            name="goal"
            id="goal"
            className="goals-form__input"
            placeholder="Goal details..."
            value={currentEdit ? editGoalInput : goalInput}
          ></textarea>
          {formCompleted ? (
            <BsCheckCircleFill className="complete-icon" />
          ) : (
            <button
              onClick={() => {
                if (currentEdit) {
                  handleEditUpdate();
                  handleFormCompletion();
                } else {
                  handleSubmit();
                  handleFormCompletion();
                }
              }}
              type="submit"
              className="btn goals-form__submit"
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default GoalsForm