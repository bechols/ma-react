import {combineReducers} from 'redux';
import {
  SELECT_TEMPLATE,
  SELECT_ENDPOINT,
  TOGGLE_ENDPOINT_LIST_VISIBILITY
  //TOGGLE_OPTIONAL_INPUT_COLUMN,
  //UPLOAD_FILE
} from './actions';


function endpointListVisibility (state = true, action) {
  switch (action.type) {
    case TOGGLE_ENDPOINT_LIST_VISIBILITY:
      return action.visibility;
    default:
      return state;
  }
}

function selectedTemplate (state = 'none', action) {
  switch (action.type) {
    case SELECT_TEMPLATE:
      return {
        state: action.template
      };
    default:
      return state;
  }
}

function selectedEndpoints (state = [], action) {
  switch (action.type) {
    case SELECT_ENDPOINT:
      return {
        state: [...state, action.endpoint]
      };
    default:
      return state;
  }
}

const matchAndAppendApp = combineReducers({
  endpointListVisibility,
  selectedTemplate,
  selectedEndpoints
});

export default matchAndAppendApp;
