import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore'
import { startSetArticles } from './actions/articles'
import { login, logout } from './actions/auth'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'))

//logica per la autenticazione e per il logout
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid)); //così ho settato l'id dell'utente che fa il login
        store.dispatch(startSetArticles()).then(() => {
            ReactDOM.render(jsx, document.getElementById('app'))
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard')
            }
        })
    } else {
        store.dispatch(logout());
        renderApp();
    }
});