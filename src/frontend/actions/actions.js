export const GET_AVAILABLE_ENDPOINTS = 'GET_AVAILABLE_ENDPOINTS';
export const GET_AVAILABLE_TEMPLATES = 'GET_AVAILABLE_TEMPLATES';
export const GET_PREVIOUS_JOB = 'GET_PREVIOUS_JOB';
export const GET_REQUIRED_INPUT_COLUMN = 'GET_REQUIRED_INPUT_COLUMN';
export const TOGGLE_TEMPLATE = 'TOGGLE_TEMPLATE';
export const TOGGLE_ENDPOINT = 'TOGGLE_ENDPOINT';
export const UPDATE_ENDPOINTS = 'UPDATE_ENDPOINTS';
export const TOGGLE_ENDPOINT_LIST_VISIBILITY = 'TOGGLE_ENDPOINT_LIST_VISIBILITY';
export const TOGGLE_OPTIONAL_INPUT_COLUMNS = 'TOGGLE_OPTIONAL_INPUT_COLUMNS';
export const UPLOAD_FILE = 'UPLOAD_FILE';

export function getAvailableEndpoints () {
  return { type: GET_AVAILABLE_ENDPOINTS };
}
export function getAvailableTemplates () {
  return { type: GET_AVAILABLE_TEMPLATES };
}
export function toggleTemplate (templateId, includedEndpoints) {
  return { type: TOGGLE_TEMPLATE, templateId, includedEndpoints };
}
export function toggleEndpoint (endpointId) {
  return { type: TOGGLE_ENDPOINT, endpointId };
}
export function updateEndpoints (endpointsSelected) {
  return { type: UPDATE_ENDPOINTS, endpointsSelected}
}
export function toggleEndpointListVisibility () {
  return { type: TOGGLE_ENDPOINT_LIST_VISIBILITY };
}
export function toggleOptionalInputColumns (endpoint) {
  return { type: TOGGLE_OPTIONAL_INPUT_COLUMNS, endpoint };
}
export function uploadFile (file) {
  return { type: UPLOAD_FILE, file };
}
