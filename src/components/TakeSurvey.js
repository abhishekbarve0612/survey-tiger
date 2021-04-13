import { useContext } from "react";
import { Link } from "react-router-dom";
import { LocalStore } from "../Contexts/localStoreContext";

const TakeSurvey = () => {
  const [data] = useContext(LocalStore);
  console.log(data);
  return (
    <div className="d-flex flex-column justify-content-lg-center align-content-center m-3 take-survey-form">
      {data.map((d, index) => {
        return (
          <div key={d.id}>
            <p className="p-2">{d.question}</p>
            {d.type == 1 ? (
              <div>
                {d.options.map((op, index) => {
                  return (
                    <div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name={d.id}
                          id={`${op}-${d.id}`}
                        />
                        <label
                          className="form-check-label"
                          for={`${op}-${d.id}`}
                        >
                          {op}
                        </label>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>
                {d.options.map((op, index) => {
                  return (
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={op}
                        id={`${op}-${d.id}`}
                      />
                      <label className="form-check-label" for={`${op}-${d.id}`}>
                        {op}
                      </label>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
      <Link className="btn btn-lg btn-warning m-lg-3" to="/survey-tiger/">
        Submit Survey
      </Link>
    </div>
  );
};

export default TakeSurvey;
