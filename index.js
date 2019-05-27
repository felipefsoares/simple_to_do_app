import React from 'react'
import { AppRegistry } from 'react-native';
import App from './src/App';
import { Provider } from 'react-redux';
import configureStore from './src/configureStore'

const store = configureStore()

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
)
AppRegistry.registerComponent('simpleTODOApp2', () => Root);
