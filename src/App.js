import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import Headerthing from "./components/Headerthing";

import Home from "./pages/Home";
import About from "./pages/About";
import Misc from "./pages/Misc";

import "./App.css";

function App() {
  return (
    <>
      <div className="center-items">
        <Headerthing />
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/misc">
              <Misc />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
