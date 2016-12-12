import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import {loadCourses} from './actions/courseActions'; //passes actions to kick off store chain -> pass to store.dispatch
import {loadAuthors} from './actions/authorActions';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux'; // attaches store to react container component;

const store = configureStore();
store.dispatch(loadCourses()); //passing store courses from api
store.dispatch(loadAuthors());
render (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
    document.getElementById('app')

);
