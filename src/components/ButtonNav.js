const ButtonNav = ({ submitForm, renderButton }) => {
  if (renderButton != 0)
    return (
      <div className="m-3">
        <button
          type="button"
          onClick={() => submitForm(true)}
          className="btn btn-warning btn-lg m-1"
        >
          Add Question
        </button>
        <button
          type="button"
          onClick={() => submitForm(false)}
          className="btn btn-warning btn-lg m-1"
        >
          Publish
        </button>
      </div>
    );
  else return <></>;
};

export default ButtonNav;
