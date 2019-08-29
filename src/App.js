import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.sass';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Modal from './Components/Modal/Modal';
import Home from './Pages/Home/Home';
import Registration from './Pages/Registration/Registration';
import FindProjects from './Pages/FindProjects/FindProjects';
import GrantsPage from './Pages/GrantsPage/GrantsPage';
import EventsPage from './Pages/EventsPage/EventsPage';
import UserProfile from './Pages/UserProfile/index';
import AuthRoute from './Components/Routes/AuthRoute';
import MyProfileEdit from './Pages/MyProfileEdit/index';
import UnAuthRoute from './Components/Routes/UnAuthRoute';
import ErrorWrappedRoute from './Components/Routes/ErrorWrappedRoute';

import { isAuthInit } from './Store/Actions/Auth/actionAuth';
import { ROUTES } from './Constants';
import { getFromLocalState } from './Libs/localStorage';


function App(props) {
  const [initialize, setInitialize] = useState(false);

  useEffect(() => {
    const tokens = getFromLocalState('TOKEN_INFO');
    const user = getFromLocalState('USER_INFO');

    if (tokens && user) {
      props.isAuthInit(tokens, user);
    }
    setInitialize(true);
  }, []);


  if (!initialize) return null;


  return (
    <div className='App'>
      <Modal/>
      <Header/>
      <>
        <Switch>
          <Route exact path='/' component={Home}/>
          <AuthRoute
            path={`/${ROUTES.REG_PAGE}`}
            redirect={`${ROUTES.HOME_PAGE}`}
            component={Registration}
          />
          <ErrorWrappedRoute path={`/${ROUTES.PROJECT_SEARCH}`} component={FindProjects}/>
          {/* <Route path={`/${ROUTES.PROJECT_SEARCH}`} component={FindProjects}/> */}
          <Route path={`/${ROUTES.GRANTS_SEARCH}`} component={GrantsPage}/>
          <Route path={`/${ROUTES.EVENTS_SEARCH}`} component={EventsPage}/>
          <UnAuthRoute
            path={`/${ROUTES.USER_PROFILE}/:userId/edit`}
            redirect={`${ROUTES.HOME_PAGE}`}
            component={MyProfileEdit}
          />
          <Route path={`/${ROUTES.USER_PROFILE}/:userId/:tab`} component={UserProfile}/>
        </Switch>
      </>
      <Footer/>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  isAuthInit: bindActionCreators(isAuthInit, dispatch),
});

export default hot(module)(connect(null, mapDispatchToProps)(App));

App.propTypes = {
  isAuthInit: PropTypes.func,
};
