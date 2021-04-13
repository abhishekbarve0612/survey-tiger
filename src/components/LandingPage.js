import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <Link to="/create-survey" className="btn btn-lg btn-warning p-3 m-2">
        Create Survey
      </Link>
      <Link to="/take-survey" className="btn btn-lg btn-warning p-3">
        Take Survey
      </Link>
    </div>
  );
};

export default LandingPage;
