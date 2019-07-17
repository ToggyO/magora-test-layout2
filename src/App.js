import React from 'react';
import { Route } from 'react-router-dom';
import './App.sass';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import Registration from './Pages/Registration/Registration';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-container">
        <Route exact path='/' render={ () => <Home /> }/>
        <Route exact path='/registration' render={ () => <Registration /> }/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
