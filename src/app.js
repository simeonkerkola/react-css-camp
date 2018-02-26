import React from 'react';
import ReactDOM from 'react-dom';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { Provider } from 'react-redux';
// import 'normalize.css/normalize.css';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import './styles/styles.scss';
import { firebase } from './firebase/firebase';
import { login, logout } from './actions/auth';
import LoadingPage from './components/LoadingPage';

const store = configureStore();

const jsx = (
  // Provider allows us to "provide" a store to all of the components that make up the app
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

// We don't wanna render the whole page again when user clicks login
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    renderApp();

    // Throw user from front page to the dashboard
    if (history.location.pathname === '/') history.push('/dashboard');
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/'); // Throws user to the front page
  }
});
