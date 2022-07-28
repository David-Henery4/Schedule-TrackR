import React, { useState } from "react";
import {GoalsOutcome, GoalsForm, EditDelete} from '../components';
import { BsThreeDots } from "react-icons/bs";
import mockGoalsData from '../data/mockGoalsData';
import { useGlobalContext } from '../context/provider';



export const Goals = () => {
  const {goalsData, activeGoalTab} = useGlobalContext()
  //
  const handleThreeDotClick = (id) => {
    const newData = goalsData.map(goal => {
      if (goal.id === id){
        goal.activeTab = !goal.activeTab
        goal.editActive = false
      } else {
        goal.activeTab = false
        goal.editActive = false
      }
      return goal
    })
    activeGoalTab(newData)
  }
  //
  return (
    <section className="goals">
      <GoalsForm />
      <div className="goals-row">
        {goalsData.length < 1
          ? mockGoalsData.map((tab) => {
              const { id, start, goal } = tab;
              return (
                <div className="goals-tab" key={id}>
                  <p className="goals__start">{start}</p>
                  <BsThreeDots className="goals__edit" />
                  <article className="goals__action">{goal}</article>
                  <GoalsOutcome />
                </div>
              );
            })
          : goalsData.map((tab) => {
              const {
                id,
                goalDate,
                goalInput,
                activeTab,
                checkedSuccess,
                checkedFailed,
              } = tab;
              // console.log(tab)
              return (
                <div className="goals-tab" key={id}>
                  <p className="goals__start">{goalDate}</p>
                  <EditDelete activeTab={activeTab} id={id} />
                  <BsThreeDots
                    onClick={() => {
                      handleThreeDotClick(id);
                    }}
                    className="goals__edit"
                  />
                  <article className="goals__action">{goalInput}</article>
                  <GoalsOutcome {...tab}/>
                </div>
              );
            })}
      </div>
    </section>
  );
}

export default Goals

