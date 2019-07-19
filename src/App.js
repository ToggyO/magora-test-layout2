import React from 'react';
import { Route } from 'react-router-dom';
import './App.sass';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Modal from './Components/Modal/Modal';
import Home from './Pages/Home/Home';
import Registration from './Pages/Registration/Registration';


function App() {
  return (
    <div className="App">
      <Modal />
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
