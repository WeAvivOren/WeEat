// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Header from './src/component/Header.jsx';
import Toolbar from "./src/component/Toolbar";
import SimpleMap from "./src/component/SimpleMap";
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import rootReducer from './src/reducers'
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const Hello = props => (
    <div>Hello {props.name}!</div>
)

Hello.defaultProps = {
    name: 'David'
}

Hello.propTypes = {
    name: PropTypes.string
}


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
    // we can listen to the store change
    if (store.getState().subscribedServerToModel) {
        sendToServer(store.getState().substate);
    }
})


document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <div>
            <Provider store={store}>
                <Header>
                    <Toolbar restaurants={[]}/>
                    <div  style={{ marginTop: '10px' }}></div>
                </Header>
            </Provider>
        </div>,
        document.body.appendChild(document.createElement('div')),
    )
})
