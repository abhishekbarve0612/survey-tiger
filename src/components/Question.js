import { useState } from "react";
import Option from "./Option";

const Question = ({ qType, addOption, removeNode, setQuestion }) => {
  if (qType != null)
    return (
      <div id="question-section">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            ?
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Type Question"
            aria-label="question"
            aria-describedby="question"
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
            required
          />
        </div>
        <label htmlFor="options">Option:</label>
        <div className="options">
          <Option addOption={addOption} qType={qType} removeNode={removeNode} />
        </div>
      </div>
    );
  else return <div>Select Quesiton Type</div>;
};

export default Question;
