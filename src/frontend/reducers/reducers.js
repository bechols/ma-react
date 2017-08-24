import {combineReducers} from 'redux';
import {
  GET_AVAILABLE_ENDPOINTS,
  GET_AVAILABLE_TEMPLATES,
  TOGGLE_TEMPLATE,
  TOGGLE_ENDPOINT,
  TOGGLE_ENDPOINT_LIST_VISIBILITY
  //TOGGLE_OPTIONAL_INPUT_COLUMN,
  //UPLOAD_FILE
} from '../actions/actions';

function Endpoint (id, name, description) {
  this.id = id;
  this.name = name;
  this.description = description;
}

const propertyDetails = new Endpoint(0, 'property/details', 'Assessment info');
const propertyValue = new Endpoint(1, 'property/value', 'HouseCanary AVM');

const baseEndpoints = [
  propertyDetails,
  propertyValue
];

function Template (id, name, endpoints) {
  this.id = id;
  this.name = name;
  this.endpoints = endpoints;
}

const loanCollateralAnalysis = new Template(0, 'Loan Collateral Analysis', [0, 1]);
const rentalAnalysis = new Template(1, 'Rental Analysis', [1]);

const baseTemplates = [
  loanCollateralAnalysis,
  rentalAnalysis
];

function availableEndpoints (state = [], action ) {
  switch (action.type) {
    case GET_AVAILABLE_ENDPOINTS:
      return baseEndpoints;
    default:
      return state;
  }
}

function availableTemplates (state = [], action ) {
  switch (action.type) {
    case GET_AVAILABLE_TEMPLATES:
      return baseTemplates;
    default:
      return state;
  }
}

function endpointListVisibility (state = true, action) {
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
      if (state === null) {
        return action.templateId;
      } else {
        return null;
      }
    default:
      return state;
  }
}

function selectedEndpoints (state = [], action) {
  switch (action.type) {
    case TOGGLE_ENDPOINT:
      if (state.includes(action.endpointId)) {
        return state.filter(e => e !== action.endpointId);
      }
      return {
        state: [...state, action.endpointId]
      };
    default:
      return state;
  }
}

const matchAndAppendApp = combineReducers({
  availableEndpoints,
  availableTemplates,
  endpointListVisibility,
  selectedTemplate,
  selectedEndpoints
});

export default matchAndAppendApp;
