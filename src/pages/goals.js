import React from 'react'
import {GoalsOutcome, GoalsForm} from '../components';
import { BsThreeDots } from "react-icons/bs";
import mockGoalsData from '../data/mockGoalsData';
// import { GoalsForm } from '../components';

export const Goals = () => {
  //
  return (
    <section className="goals">
      <GoalsForm/>
      <div className="goals-row">
        {mockGoalsData.map(tab => {
          const {id, start, goal} = tab
          return (
            <div className="goals-tab" key={id}>
              <p className="goals__start">{start}</p>
              <BsThreeDots className="goals__edit" />
              <article className="goals__action">
                {goal}
              </article>
              <GoalsOutcome />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Goals

