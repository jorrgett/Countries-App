import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import CreateActivity from "./Components/CreateActivity/CreateActivity";
import CountryDetail from "./Components/CountryDetail/CountryDetail";
import LandingPage from "./Components/LandingPage/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={Home} />
          <Route path="/activities" component={CreateActivity} />
          <Route path="/countries/:id" component={CountryDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
