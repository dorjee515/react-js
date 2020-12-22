import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './components/menucomponent';
import {DISHES} from './shared/dishes';
import React,{ Component } from 'react';

class App extends Component{  

  constructor(props){
   super(props);
   this.state={
     dishes:DISHES
    };
   }
  render(){
  return ( 
    <div>
      <Navbar dark color="primary">
      <div classname="container">
        <NavbarBrand href="/">food is good</NavbarBrand>
      </div>
      </Navbar>
      <Menu dishes={this.state.dishes}/>
    </div>
  );
  }
}

export default App;
