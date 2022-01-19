//import React from "react";
import './styles/App.css';
import './Navbar.css';
import Navbar from "./components/Navbar";
//import Slider from "./components/Slider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import SignIn from './pages/signin';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <div>
            <Navbar/>
            <Route exact path="/login" component={Home} />
            <Route exact path="/userpass" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/" component={SignIn} />
          </div>
      </Routes>
    </Router>
  );
}

export default App;

/*
// Default App.js
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/