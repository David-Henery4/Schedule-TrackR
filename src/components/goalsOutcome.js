import React, {useState} from 'react'
import { useEffect } from 'react';
import { FiXSquare, FiSquare, FiCheckSquare } from "react-icons/fi";
import { useGlobalContext } from '../context/provider';

export const GoalsOutcome = ({ id, checkedSuccess, checkedFailed }) => {
  const { markingGoalCompleted, markingGoalFailed } = useGlobalContext();
  const [checkedSuccessToggle, setCheckedSuccessToggle] = useState(false);
  const [checkedFailedToggle, setCheckedFailedToggle] = useState(false);
  //
  const checkMarkSuccess = () => {
    // markingGoalCompleted(id);
    setCheckedSuccessToggle(!checkedSuccessToggle);
    markingGoalCompleted(id,checkedSuccessToggle);
    // if (checkedFailed) setCheckedFailed(false)
  };
  const checkMarkFailed = () => {
    // markingGoalFailed(id);
    setCheckedFailedToggle(!checkedFailedToggle);
    markingGoalFailed(id,checkedFailedToggle);
    // if (checkedSuccess) setCheckedSuccess(false)
  };
  //
  return (
    <div className="goals-outcome">
      <p className="goals__question">How did you do?</p>
      <div className="goals-completed">
        <p className="goals__success">Achieved:</p>
        <span>
          {checkedSuccess ? (
            <FiCheckSquare className="goals-icon" onClick={checkMarkSuccess} />
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
  );
};

export default GoalsOutcome