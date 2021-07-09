import Header from "./components/Header"
import About from "./components/Aboutme";
import Projects from "./components/Projects"
import Contact from "./components/Contact";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/work">
          <Projects />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>

    </Router >


  );
}

export default App;
