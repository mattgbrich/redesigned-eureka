import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Greeting from './Greeting';
const { userService } = window.SERVICES;

function renderApp (user) {
    ReactDOM.render(<App name={user.name} />, document.getElementById('app'));
}
userService.subscribe(renderApp);

renderApp(userService.state);

ReactDOM.render(<Greeting />, document.getElementById('greeting'));

