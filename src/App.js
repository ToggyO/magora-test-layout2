import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.sass';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Modal from './Components/Modal/Modal';
import Home from './Pages/Home/Home';
import Registration from './Pages/Registration/Registration';
import FindProjects from "./Pages/FindProjects/FindProjects";
import GrantsPage from "./Pages/GrantsPage/GrantsPage";
import EventsPage from "./Pages/EventsPage/EventsPage";


function App(props) {
  return (
    <div className="App">
      <Modal />
      <Header />
      <>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/registration' component={Registration}/>
          {/*<Route path='/projectSearch' component={FindProjects}/>*/}
          {/*<Route path='/grantsSearch' component={GrantsPage}/>*/}
          <Route path='/eventsSearch' component={EventsPage}/>
        </Switch>
      </>
      <Footer />
    </div>
  );
}

export default App;
