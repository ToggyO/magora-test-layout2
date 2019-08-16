import React, {useEffect} from 'react';
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
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {isAuthInit} from "./Store/Actions/Auth/actionAuth";
import AuthRoute from "./Components/Routes/AuthRoute";


function App(props) {
  console.log(props);
  useEffect(() => {
    const initToken = JSON.parse(localStorage.getItem('TOKEN_INFO'));
    if(initToken) {
      props.isAuthInit();
    }
  },[]);

  return (
    <div className="App">
      <Modal />
      <Header />
      <>
        <Switch>
          <Route exact path='/' component={Home}/>
          <AuthRoute path='/registration' component={Registration}/>
          <Route path='/projectSearch' component={FindProjects}/>
          <Route path='/grantsSearch' component={GrantsPage}/>
          <Route path='/eventsSearch' component={EventsPage}/>
        </Switch>
      </>
      <Footer />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    isAuthInit: bindActionCreators(isAuthInit, dispatch),
  }
};

export default connect(null, mapDispatchToProps)(App);
