import logo from "./logo.svg";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Menubar from "./components/Nav";
import Feed from "../src/components/Feed";
import Temas from "../src/components/Temas";
import Index from "../src/pages/respuesta/index";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          
          <Route path="/responder">
            <div className="App">
            <Menubar />
              <Index />
            </div>
          </Route>

          <Route path="/">
            <div className="App">
              <Menubar />
              <div className="feedd">
                <Feed />
                <Temas />
              </div>
            </div>
          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
