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
const propertyFlood = new Endpoint(2, 'property/flood', 'Flood risk');
const propertyValueWithinBlock = new Endpoint(3, 'property/value_within_block', 'Position of a property\'s value within the distribution of values on the block');

const baseEndpoints = [
  propertyDetails,
  propertyValue,
  propertyFlood,
  propertyValueWithinBlock
];

function Template (id, name, description, endpoints) {
  this.id = id;
  this.name = name;
  this.description = description;
  this.endpoints = endpoints;
}

const loanCollateralAnalysis = new Template(0, 'Loan Collateral Analysis', 'Current and forecasted value, market data, and property attributes', [0, 1]);
const rentalAnalysis = new Template(1, 'Rental Analysis', 'Estimated rental yield and forecast', [1, 3]);

const baseTemplates = [
  loanCollateralAnalysis,
  rentalAnalysis
];

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
      if (state === action.templateId) {
        return null;
      } else {
        return action.templateId;
      }
    default:
      return state;
  }
}

function selectedEndpoints (state = [], action) {
  switch (action.type) {
    case TOGGLE_ENDPOINT:
      console.log('Here is state ', state);
      console.log('Here is action ', action);
      if (state.length !== 0) {
        if (state.includes(action.endpointId)) {
          console.log('Should remove clicked endpoint');
          return state.filter(endpoint => endpoint !== action.endpointId);
        } else {
          console.log('Should append new endpoint');
          return [ ...state, action.endpointId ];
        }
      } else {
        console.log('Should add endpoint to the empty array');
        return [ ...state, action.endpointId ];
      }
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
