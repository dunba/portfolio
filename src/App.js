import logo from "./logo.svg";
import "./App.css";
import Footer from "./Footer";
import Nav from "./nav";
import Projects from "./projects";
import Resume from "./resume";
import Videos from './Videos';
import Contact from "./contact";
import Home from "./home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
      </div>
      <div className="Content">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path='/videos' component={Videos} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
