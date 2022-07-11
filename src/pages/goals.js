import React from 'react'
import {GoalsOutcome, GoalsForm} from '../components';
import { BsThreeDots } from "react-icons/bs";
import mockGoalsData from '../data/mockGoalsData';
import { useGlobalContext } from '../context/provider';


export const Goals = () => {
  const {goalsData} = useGlobalContext()
  console.log(goalsData.length)
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
              const { id, goalDate, goalInput } = tab;
              return (
                <div className="goals-tab" key={id}>
                  <p className="goals__start">{goalDate}</p>
                  <BsThreeDots className="goals__edit" />
                  <article className="goals__action">{goalInput}</article>
                  <GoalsOutcome />
                </div>
              );
            })}
      </div>
    </section>
  );
}

export default Goals

