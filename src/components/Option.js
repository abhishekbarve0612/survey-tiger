const Option = ({ removeNode, addOption }) => {
  return (
    <>
      <div className="input-group">
        <input
          type="text"
          className="form-control option-input"
          placeholder="Enter Option"
          aria-label="Enter Option"
        />
        <button
          className="btn btn-outline-secondary"
          onClick={(e) => addOption(e)}
          type="button"
        >
          +
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={(e) => removeNode(e)}
          type="button"
        >
          -
        </button>
      </div>
    </>
  );
};

export default Option;
