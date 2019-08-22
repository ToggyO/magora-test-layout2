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
import UserProfile from "./Pages/UserProfile";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {isAuthInit} from "./Store/Actions/Auth/actionAuth";
import AuthRoute from "./Components/Routes/AuthRoute";
import {ROUTES} from './Constants/';
import {getFromLocalState} from "./Libs/localStorage";


function App(props) {
  
  useEffect(() => {
    if(getFromLocalState('TOKEN_INFO')) {
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
          <AuthRoute path={`/${ROUTES.REG_PAGE}`} component={Registration}/>
          <Route path={`/${ROUTES.PROJECT_SEARCH}`} component={FindProjects}/>
          <Route path={`/${ROUTES.GRANTS_SEARCH}`} component={GrantsPage}/>
          <Route path={`/${ROUTES.EVENTS_SEARCH}`} component={EventsPage}/>
          <Route path={`/${ROUTES.USER_PROFILE}/:userId`} component={UserProfile}/>
          {/*<Route path='/profile/:userId' component={UserProfile}/>*/}
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
