import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { css } from 'glamor';
import configureStore from './store/configureStore';
import { toast } from 'react-toastify';
import { startSetListings } from './actions/listings';
import { startSetReminders } from './actions/reminders';
import LoadingScreen from './components/LoadingScreen';
import ErrorScreen from './components/ErrorScreen';
import './styles/index.css';
import AppRouter, { history } from './routers/AppRouter';
import * as serviceWorker from './serviceWorker';
import { firebase } from './firebase/firebase';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

const notify = () => (
    toast(`✌🏻Successfully loaded listings`, { 
        autoClose: 8000, 
        position: toast.POSITION.TOP_RIGHT,
        className: css({
            backgroundColor: 'rgb(255,255,255)'
        }),
        bodyClassName: css({
            fontFamily: 'Raleway Medium',
            color: 'rgb(98, 110, 132)'
        }),
        progressClassName: css({
            background: 'rgb(62, 133, 247)'
        })
    })
)

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<LoadingScreen />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(startSetListings()).then(() => {
            renderApp();
            notify();
            store.dispatch(startSetReminders());
            if (history.location.pathname === '/') {
                history.push('/home');
            }
        }).catch(() => {
            ReactDOM.render(<ErrorScreen />, document.getElementById('app'));
        });
    } else {
        renderApp();
        history.push('/');
    }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
