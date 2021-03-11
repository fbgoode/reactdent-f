import React from 'react';
import {BrowserRouter, Switch ,Route} from 'react-router-dom';
 import './App.css';
import Login from './containers/Login/Login';
import Home from './containers/Home/Home';
import Register from './containers/Register/Register';
import Profile from './containers/Profile/Profile';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
         
        <Switch>

          
          <Route path='/' exact component={Home}/>
          <Route path='/login' exact component ={Login}/>
          <Route path='/register' exact component ={Register}/>
          <Route path='/profile' exact component ={Profile}/>
         
          
        </Switch>
         
      </BrowserRouter>
      
    </div>
  );
}

export default App;
