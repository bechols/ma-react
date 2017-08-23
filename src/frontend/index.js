import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import { AppContainer } from 'react-hot-loader';
import { overrideComponentTypeChecker } from 'react-toolbox';
import { createStore } from 'redux';
import matchAndAppendApp from './redux/reducers';
import {
  selectTemplate,
  selectEndpoint,
  toggleEndpointListVisibility
} from './redux/actions';
import { connect } from 'react-redux';

const store = createStore(matchAndAppendApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


const rootEl = document.getElementById('app');

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);


const getTemplate = (template) => {
  return 'HERE IS THE TEMPLATE: ' + template;
};

const mapStateToProps = state => {
  return {
    template: getTemplate(state.template)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTemplateClick: template => {
      dispatch(selectTemplate(template));
    }
  };
};

const ReduxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <ReduxContainer store={store}>
        <App onTemplateClick={this.onTemplateClick}/>
      </ReduxContainer>
    </AppContainer>,
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
    module.hot.accept('./component/App', render);
  }
}

render();
