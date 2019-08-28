import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.sass';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hot } from 'react-hot-loader';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Modal from './Components/Modal/Modal';
import Home from './Pages/Home/Home';
import Registration from './Pages/Registration/Registration';
import FindProjects from './Pages/FindProjects/FindProjects';
import GrantsPage from './Pages/GrantsPage/GrantsPage';
import EventsPage from './Pages/EventsPage/EventsPage';
import UserProfile from './Pages/UserProfile/index';

import { isAuthInit } from './Store/Actions/Auth/actionAuth';
import AuthRoute from './Components/Routes/AuthRoute';
import { ROUTES } from './Constants';
import { getFromLocalState } from './Libs/localStorage';

import MyProfileEdit from './Pages/MyProfileEdit/index';


function App(props) {
  useEffect(() => {
    const tokens = getFromLocalState('TOKEN_INFO');
    const user = getFromLocalState('USER_INFO');

    if (tokens && user) {
      props.isAuthInit(tokens, user);
    }
  }, []);

  return (
    <div className='App'>
      <Modal/>
      <Header/>
      <>
        <Switch>
          <Route exact path='/' component={Home}/>
          <AuthRoute path={`/${ROUTES.REG_PAGE}`} component={Registration}/>
          <Route path={`/${ROUTES.PROJECT_SEARCH}`} component={FindProjects}/>
          <Route path={`/${ROUTES.GRANTS_SEARCH}`} component={GrantsPage}/>
          <Route path={`/${ROUTES.EVENTS_SEARCH}`} component={EventsPage}/>
          <Route path={`/${ROUTES.USER_PROFILE}/:userId/edit`} component={MyProfileEdit}/>
          <Route path={`/${ROUTES.USER_PROFILE}/:userId/:tab`} component={UserProfile}/>
        </Switch>
      </>
      <Footer/>
    </div>
  );
}

const mapStateToProps = ({ authData }) => ({ authData });

const mapDispatchToProps = (dispatch) => ({
  isAuthInit: bindActionCreators(isAuthInit, dispatch),
});

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(App));
