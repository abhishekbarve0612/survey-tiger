import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./components/LandingPage";
import QuestionSelector from "./components/QuestionSelector";
import CreateSurvey from "./components/CreateSurvey";
import { LocalStoreProvider } from "./Contexts/localStoreContext";
import TakeSurvey from "./components/TakeSurvey";

function App() {
  return (
    <div className="App container mt-5">
      <LocalStoreProvider>
        <Router>
          <h3>
            <Link to="/">Survey Tiger</Link>
          </h3>
          <div className="m-3">
            <Switch>
              <Route exact path="/">
                <LandingPage />
              </Route>
              <Route exact path="/create-survey">
                <CreateSurvey />
              </Route>
              <Route exact path="/take-survey">
                <TakeSurvey />
              </Route>
            </Switch>
          </div>
        </Router>
      </LocalStoreProvider>
    </div>
  );
}

export default App;
