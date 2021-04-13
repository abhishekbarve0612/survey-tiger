import { useContext, useRef, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import uuid from "uuid/v1";
import { LocalStore } from "../Contexts/localStoreContext";
import ButtonNav from "./ButtonNav";
import Question from "./Question";
import QuestionSelector from "./QuestionSelector";

const CreateSurvey = () => {
  const [storedData, publishData] = useContext(LocalStore);
  const history = useHistory();
  console.log(storedData, publishData);
  const [qType, setQType] = useState(null);
  const [question, setQuestion] = useState(null);
  const [renderButton, setRenderButton] = useState(false);
  let optionCount = useRef(1);
  const changeQType = (e) => {
    setQType(e.target.value);
    console.log(e.target.value, e.target.value == 0);
    if (e.target.value == 0) setRenderButton(null);
    setRenderButton(showButton());
  };
  const removeNode = (e) => {
    if (optionCount.current == 1) return;
    e.target.parentElement.remove();
    optionCount.current -= 1;
    setRenderButton(showButton());
  };
  const addOption = (e) => {
    if (optionCount.current == 2 && qType == 1) return;
    if (optionCount.current == 4 && qType == 2) return;
    optionCount.current += 1;
    const parent = e.target.parentElement;
    const node = parent.cloneNode(true);
    console.log(node);
    node.childNodes[0].value = "";
    node.childNodes[2].addEventListener("click", (e) => removeNode(e));
    node.childNodes[1].addEventListener("click", (e) => addOption(e));
    parent.parentElement.append(node);
    setRenderButton(showButton());
  };
  const showButton = () => {
    if (
      (qType == 1 && optionCount.current == 2) ||
      (qType == 2 && optionCount.current == 4)
    )
      return true;
    return false;
  };

  const cleanup = () => {
    const optionsNode = document.querySelector(".options");
    const firstOption = optionsNode.firstChild;
    optionsNode.innerHTML = "";
    optionsNode.append(firstOption);
    setQType(null);
    setQuestion(null);
    setRenderButton(false);
    optionCount.current = 1;
  };

  const submitForm = (addNew) => {
    publishQuestion();
    const form = document.querySelector("#questionForm");
    form.reset();
    cleanup();
    if (addNew) {
      history.push("/survey-tiger/create-survey");
    } else history.push("/survey-tiger/");
  };

  const publishQuestion = () => {
    const nodes = document.querySelectorAll(".option-input");
    let optionList = [];
    nodes.forEach((node) => {
      optionList.push(node.value);
    });
    let newData = {
      id: uuid(),
      type: qType,
      question: question,
      options: optionList,
    };
    publishData(newData);
  };

  return (
    <div className="container">
      <form id="questionForm">
        <QuestionSelector changeQType={changeQType} />
        <Question
          addOption={addOption}
          qType={qType}
          setQuestion={setQuestion}
          removeNode={removeNode}
        />
        {renderButton != 0 && (
          <ButtonNav renderButton={renderButton} submitForm={submitForm} />
        )}
      </form>
    </div>
  );
};

export default CreateSurvey;
