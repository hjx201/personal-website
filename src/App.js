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
      <div className="site-wrapper">

        <div className= "sidebar" />

        <div className="center-wrapper">

          <Headerthing />
          <Router>
              <Navbar />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/misc" component={Misc} />
                </Switch>
          </Router>
        </div>
        <div className= "sidebar" />
      </div>
    </>
  );
}

export default App;
