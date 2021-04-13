import { useState } from "react";
import Question from "./Question";

const QuestionSelector = ({ changeQType }) => {
  return (
    <div>
      <select
        className="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
        onChange={(e) => changeQType(e)}
      >
        <option value="0" defaultValue="0">
          Select Quesiton Type
        </option>
        <option value="1">Single Select</option>
        <option value="2">Multi Select</option>
      </select>
    </div>
  );
};

export default QuestionSelector;
