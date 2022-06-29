import React, { useState } from 'react'
import { BsThreeDots } from "react-icons/bs";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { FiXSquare, FiSquare, FiCheckSquare } from "react-icons/fi";


export const Goals = () => {
  const [checkedSuccess, setCheckedSuccess] = useState(false)
  const [checkedFailed, setCheckedFailed] = useState(false)
  //
  const checkMarkSuccess = () => {
    setCheckedSuccess(!checkedSuccess)
  }
  const checkMarkFailed = () => {
    setCheckedFailed(!checkedFailed)
  }
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
          <div className="goals-outcome">
            <p className="goals__question">How did you do?</p>
            <div className="goals-completed">
              <p className="goals__success">Achieved:</p>
              <span>
                {checkedSuccess ? (
                  <FiCheckSquare
                    className="goals-icon"
                    onClick={checkMarkSuccess}
                  />
                ) : (
                  <FiSquare className="goals-icon" onClick={checkMarkSuccess} />
                )}
              </span>
              <p className="goals__failed">Failed:</p>
              <span>
                {checkedFailed ? (
                  <FiXSquare className="goals-icon" onClick={checkMarkFailed} />
                ) : (
                  <FiSquare className="goals-icon" onClick={checkMarkFailed} />
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Goals

