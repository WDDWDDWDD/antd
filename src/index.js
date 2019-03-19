import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AddTodo from './containers/AddTodo';
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router,
    Route,
    Link
}from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './redux/reducers'
let store = createStore(todoApp)

ReactDOM.render((
        <Provider store={store}>
                <Router>
                <div>
                    <Route exact path="/" component={App} />
                    <Route exact path="/add" component={AddTodo} />
                </div>
            </Router>
        </Provider>), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
