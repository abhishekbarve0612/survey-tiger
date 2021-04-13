import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <Link
        to="/survey-tiger/create-survey"
        className="btn btn-lg btn-warning p-3 m-2"
      >
        Create Survey
      </Link>
      <Link
        to="/survey-tiger/take-survey"
        className="btn btn-lg btn-warning p-3"
      >
        Take Survey
      </Link>
    </div>
  );
};

export default LandingPage;
