import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { AppContainer } from 'react-hot-loader';
import { overrideComponentTypeChecker } from 'react-toolbox';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-css-themr';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import submitJob from './sagas/sagas';
import matchAndAppendApp from './reducers/reducers';
import {
  getAvailableEndpoints,
  getAvailableTemplates,
  getPreviousResults
} from './actions/actions';
import theme from './theme';

const rootEl = document.getElementById('app');

const sagaMiddleware = createSagaMiddleware();
const store = createStore(matchAndAppendApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(sagaMiddleware));
sagaMiddleware.run(submitJob);


// Initialize app state
store.dispatch(getAvailableEndpoints());
store.dispatch(getAvailableTemplates());
store.dispatch(getPreviousResults());

const render = () => {
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>,
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
