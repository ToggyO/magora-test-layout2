import React from 'react';
import { Route } from 'react-router-dom';
import './App.sass';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Modal from './Components/Modal/Modal';
import Home from './Pages/Home/Home';
import Registration from './Pages/Registration/Registration';
import FindProjects from "./Pages/FindProjects/FindProjects";
import GrantsPage from "./Pages/GrantsPage/GrantsPage";
import EventsPage from "./Pages/EventsPage/EventsPage";


function App() {
  return (
    <div className="App">
      <Modal />
      <Header />
      <>
        <Route exact path='/' component={Home}/>
        <Route exact path='/registration' component={Registration}/>
        <Route exact path='/projectSearch' component={FindProjects}/>
        <Route exact path='/grantsSearch' component={GrantsPage}/>
        <Route exact path='/eventsSearch' component={EventsPage}/>
      </>
      <Footer />
    </div>
  );
}

export default App;
