import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { AppContainer } from 'react-hot-loader';
import { overrideComponentTypeChecker } from 'react-toolbox';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import matchAndAppendApp from './reducers/reducers';
import {
  getAvailableEndpoints,
  getAvailableTemplates,
  getPreviousResults
} from './actions/actions';

const rootEl = document.getElementById('app');

// Initialize app state
const store = createStore(matchAndAppendApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.dispatch(getAvailableEndpoints());
store.dispatch(getAvailableTemplates());
store.dispatch(getPreviousResults());

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootEl
  );
};

if (process.env.NODE_ENV !== 'production') {
  overrideComponentTypeChecker((classType, reactElement) => (
    reactElement && (
      reactElement.type === classType
      || reactElement.type.name === classType.displayName
    )
  ));
  if (module.hot) {
    module.hot.accept('./containers/App', render);
  }
}

render();
