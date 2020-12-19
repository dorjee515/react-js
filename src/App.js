import logo from './logo.svg';
import './App.css';
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './components/menucomponent';

import { Component } from 'react';
function App() {
  return (
    <div>
      <Navbar dark color="primary">
      <div classname="container">
        <NavbarBrand href="/">food is good</NavbarBrand>
      </div>
      </Navbar>
      <Menu/>
    </div>
  );
}

export default App;
