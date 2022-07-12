import React, { useState } from "react";
import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from '../context/provider';
import { BsCheckCircleFill } from "react-icons/bs";

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
        id : Date.now(),
        goalDate,
        goalInput,
        activeTab: false,
        editActive: false
      }
      addGoal(goalData)
      inputFormClose()
      resetInputs()
    }
    //
    const resetInputs = () => {
      setGoalDate("")
      setGoalInput("")
    };
    //
    // const handleFormCompletion = () => {}
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
      inputFormClose();
    }
    //
    const setEdit = (edit) => {
      if (edit){
        const currentGoalEdit = goalsData.find(goal => goal.editActive === true)
        setEditGoalDate(currentGoalEdit.goalDate);
        setEditGoalInput(currentGoalEdit.goalInput);
        // setIsEditActive(currentGoalEdit.editActive);
      }
    }
    //
    useEffect(() => {
      // currentEdit effecting functionality
      console.log(currentEdit)
      setEdit(currentEdit)
    }, [currentEdit])
    //
  return (
    <div
      className={`${
        goalsInput ? "todo-form-modal input-open" : "todo-form-modal"
      }`}
    >
      <div className="goals-form-container">
        <FaTimes className='exit-icon' onClick={inputFormClose}/>
        <form className='goals-form' onSubmit={(e) => e.preventDefault()}>
          <input onChange={(e) => {
            if (currentEdit) {
              setEditGoalDate(e.target.value)
            } else{
              setGoalDate(e.target.value)
            }
          }} type="text" className='goals-form__date' value={currentEdit ? editGoalDate: goalDate}/>
          <textarea onChange={(e) => {
            if (currentEdit){
              setEditGoalInput(e.target.value)
            } else{
              setGoalInput(e.target.value)
            }
          }} name="goal" id="goal" className='goals-form__input' value={currentEdit ? editGoalInput : goalInput}></textarea>
          <button onClick={() => {
            if (currentEdit){
              handleEditUpdate()
            } else{
              handleSubmit()
            }
          }} type="submit" className='btn goals-form__submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default GoalsForm