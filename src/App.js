import React from 'react';
import {Route, Switch} from "react-router-dom"
import NavBar from "./comp/layout/Navbar"
import Container from '@material-ui/core/Container';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Container>
        My app
      </Container>
</div>
  );
}

export default App;
