import React, {useState} from 'react'
import { FiXSquare, FiSquare, FiCheckSquare } from "react-icons/fi";

export const GoalsOutcome = () => {
  const [checkedSuccess, setCheckedSuccess] = useState(false);
  const [checkedFailed, setCheckedFailed] = useState(false);
  //
  const checkMarkSuccess = () => {
    setCheckedSuccess(!checkedSuccess);
  };
  const checkMarkFailed = () => {
    setCheckedFailed(!checkedFailed);
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