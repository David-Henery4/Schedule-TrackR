import React from 'react'
import GoalsOutcome from '../components/goalsOutcome';
import { BsThreeDots } from "react-icons/bs";

export const Goals = () => {
  //
  return (
    <section className="goals">
      <div className="goals-row">
        <div className="goals-tab">
          <p className="goals__start">Start - 12th jan</p>
          <BsThreeDots className="goals__edit" />
          <article className="goals__action">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dicta
            necessitatibus mollitia aut consequatur voluptatem deserunt
            cupiditate provident? Tempore asperiores rerum eveniet repellat ut
            laboriosam ipsum id similique!
          </article>
          <GoalsOutcome/>
        </div>
      </div>
    </section>
  );
}

export default Goals

