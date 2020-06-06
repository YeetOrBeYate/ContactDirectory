import React from 'react';
import {Route, Switch} from "react-router-dom"
import NavBar from "./comp/layout/Navbar"
import Home from "./comp/pages/Home"
import About from "./comp/pages/About"
import Container from '@material-ui/core/Container';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Container>
        <Switch>
          <Route path='/about' component={About}/>
          <Route path='/' component={Home}/>
        </Switch>
      </Container>
</div>
  );
}

export default App;
