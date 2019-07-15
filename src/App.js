import React from 'react';
import { Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.sass';
import Home from './Pages/Home/Home';
import Registration from './Pages/Registration/Registration';

function App() {
  return (
    <div className="App">
      <Route exact path='/' render={ () => <Home /> }/>
      <Route exact path='/registration' render={ () => <Registration /> }/>
    </div>
  );
}

export default App;
