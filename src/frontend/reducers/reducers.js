import {combineReducers} from 'redux';
import {
  GET_AVAILABLE_ENDPOINTS,
  GET_AVAILABLE_TEMPLATES,
  GET_PREVIOUS_RESULTS,
  TOGGLE_TEMPLATE,
  UPDATE_ENDPOINTS,
  CLEAR_SELECTED_ENDPOINTS,
  TOGGLE_ENDPOINT_LIST_VISIBILITY,
  TOGGLE_PREVIOUS_RESULTS,
  UPLOAD_FILE,
  JOB_ADDED,
  TOGGLE_RESULTS_DRAWER_VISIBILITY,
  SHOW_RESULTS_DRAWER
} from '../actions/actions';
// dummy data for demo
import baseEndpoints from './baseEndpoints';
import baseTemplates from './baseTemplates';
import baseResults from './baseResults';

function availableEndpoints (state = [], action) {
  switch (action.type) {
    case GET_AVAILABLE_ENDPOINTS:
      return baseEndpoints;
    default:
      return state;
  }
}

function availableTemplates (state = [], action) {
  switch (action.type) {
    case GET_AVAILABLE_TEMPLATES:
      return baseTemplates;
    default:
      return state;
  }
}

function previousResults (state = [], action) {
  switch (action.type) {
    case GET_PREVIOUS_RESULTS:
      return baseResults;
    case TOGGLE_PREVIOUS_RESULTS:
      if (state === []) {
        return baseResults;
      } else {
        return [];
      }
    case JOB_ADDED:
      return state.concat({
        endpoints: action.endpoints,
        file: action.file,
        template: action.template,
        id: 'ID',
        date: 'Sep 4 2017',
        status: 'Complete',
        link: 'https://www.google.com'
      });
    default:
      return state;
  }
}

function endpointListVisibility (state = false, action) {
  switch (action.type) {
    case TOGGLE_ENDPOINT_LIST_VISIBILITY:
      return !state;
    default:
      return state;
  }
}

function selectedTemplate (state = null, action) {
  switch (action.type) {
    case TOGGLE_TEMPLATE:
      if (state === action.templateId) {
        return null;
      } else {
        return action.templateId;
      }
    case CLEAR_SELECTED_ENDPOINTS:
      return null;
    default:
      return state;
  }
}

function selectedEndpoints (state = [], action) {
  switch (action.type) {
    case UPDATE_ENDPOINTS:
      return action.endpointsSelected.sort();
    case TOGGLE_TEMPLATE:
      // if no previous selected template: new template selection
      //   -add template endpoints to any already selected endpoints
      // if previous selected template == templateId: deselected template
      //   -filter template endpoints from any already selected endpoints
      // if previous selected template != templateId: switched template
      //   -wipe out any selected endpoints and replace with new template endpoints

      if (action.previousSelectedTemplate === null) {
        return state.concat(action.includedEndpoints).sort();
      } else if (action.previousSelectedTemplate === action.templateId) {
        return state.filter(endpoint => !action.includedEndpoints.includes(endpoint)).sort();
      } else {
        return action.includedEndpoints.sort();
      }
    case CLEAR_SELECTED_ENDPOINTS:
      return [];
    default:
      return state;
  }
}

function uploadedFile (state = null, action) {
  switch (action.type) {
    case UPLOAD_FILE:
      return action.file;
    default:
      return state;
  }
}

function resultsDrawerVisible (state = false, action) {
  switch (action.type) {
    case TOGGLE_RESULTS_DRAWER_VISIBILITY:
      return !state;
    case SHOW_RESULTS_DRAWER:
      return true;
    case JOB_ADDED:
      return true;
    default:
      return state;
  }
}


const matchAndAppendApp = combineReducers({
  availableEndpoints,
  availableTemplates,
  previousResults,
  endpointListVisibility,
  selectedEndpoints,
  selectedTemplate,
  uploadedFile,
  resultsDrawerVisible
});

export default matchAndAppendApp;
