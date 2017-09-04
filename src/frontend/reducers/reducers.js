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
  JOB_ADDED
} from '../actions/actions';

function Endpoint (id, name = '', description = '', optionalColumns = []) {
  this.id = id;
  this.name = name;
  this.description = description;
  this.optionalColumns = optionalColumns;
}

const propertyDetails = new Endpoint(0, 'property/details', 'Assessment info');
const propertyValue = new Endpoint(1, 'property/value', 'HouseCanary AVM');
const propertyFlood = new Endpoint(2, 'property/flood', 'Flood risk');
const propertyValueWithinBlock = new Endpoint(3, 'property/value_within_block', 'Position of a property\'s value within the distribution of values on the block',
  [{
    colHeader: 'value_within_block__client_value',
    contentDescription: 'Total estimated dollar value',
    example: '253075'
  }, {
    colHeader: 'value_within_block__client_value_sqft',
    contentDescription: 'Estimated dollar value per square foot',
    example: '275'
  }]
);

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

function Job (id, date, file, template, endpoints, status, link) {
  this.id = id;
  this.date = date;
  this.file = file;
  this.template = template;
  this.endpoints = endpoints;
  this.status = status;
  this.link = link;
}

const previousResult1 = new Job('A7N4U8', 'Aug 22 2017', 'portfolio_tape.csv', '', [1, 2], 'Complete', 'https://www.housecanary.com');
const previousResult2 = new Job('RD99AV', 'Aug 31 2017', 'hudson_county.csv', '', [0, 1, 2], 'Complete', 'https://www.housecanary.com');

const baseResults = [
  previousResult1,
  previousResult2
]

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
// not wired up yet, intended for demo/testing
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
      console.log('Action in submit job reducer', action);
      return state.concat({
        endpoints: action.endpoints,
        file: action.file,
        template: action.template,
        id: 'ID',
        date: 'Sep 3 2017',
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


const matchAndAppendApp = combineReducers({
  availableEndpoints,
  availableTemplates,
  previousResults,
  endpointListVisibility,
  selectedEndpoints,
  selectedTemplate,
  uploadedFile
});

export default matchAndAppendApp;
