export const GET_AVAILABLE_ENDPOINTS = 'GET_AVAILABLE_ENDPOINTS';
export const GET_AVAILABLE_TEMPLATES = 'GET_AVAILABLE_TEMPLATES';
export const TOGGLE_TEMPLATE = 'TOGGLE_TEMPLATE';
export const UPDATE_ENDPOINTS = 'UPDATE_ENDPOINTS';
export const CLEAR_SELECTED_ENDPOINTS = 'CLEAR_SELECTED_ENDPOINTS';
export const TOGGLE_ENDPOINT_LIST_VISIBILITY = 'TOGGLE_ENDPOINT_LIST_VISIBILITY';
export const UPLOAD_FILE = 'UPLOAD_FILE';
// coming soon
//export const GET_PREVIOUS_JOB = 'GET_PREVIOUS_JOB';
//export const GET_REQUIRED_INPUT_COLUMN = 'GET_REQUIRED_INPUT_COLUMN';

export function getAvailableEndpoints () {
  return { type: GET_AVAILABLE_ENDPOINTS };
}
export function getAvailableTemplates () {
  return { type: GET_AVAILABLE_TEMPLATES };
}
export function toggleTemplate (templateId, includedEndpoints, previousSelectedTemplate, endpointsAvailable, templatesAvailable) {
  return { type: TOGGLE_TEMPLATE, templateId, includedEndpoints, previousSelectedTemplate, endpointsAvailable, templatesAvailable };
}
export function updateEndpoints (endpointsSelected, endpointsAvailable) {
  return { type: UPDATE_ENDPOINTS, endpointsSelected, endpointsAvailable };
}
export function toggleEndpointListVisibility () {
  return { type: TOGGLE_ENDPOINT_LIST_VISIBILITY };
}
export function clearSelectedEndpoints () {
  return { type: CLEAR_SELECTED_ENDPOINTS };
}
export function uploadFile (file) {
  return { type: UPLOAD_FILE, file };
}
