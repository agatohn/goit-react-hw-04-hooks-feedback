import React, { useCallback } from "react";
import style from "./ButtonBlock.module.css";

const ButtonBlock = ({ addFeedback, options }) => {
  const handleButtonClick = useCallback(
    (e) => {
      addFeedback(e.target.name);
    },
    [addFeedback]
  );

  return (
    <>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className={style.button}
          name={option}
          onClick={handleButtonClick}
        >
          {option}
        </button>
      ))}
    </>
  );
};

export default ButtonBlock;
