export const GET_AVAILABLE_ENDPOINTS = 'GET_AVAILABLE_ENDPOINTS';
export const GET_AVAILABLE_TEMPLATES = 'GET_AVAILABLE_TEMPLATES';
export const GET_PREVIOUS_RESULTS = 'GET_PREVIOUS_RESULTS';
export const TOGGLE_TEMPLATE = 'TOGGLE_TEMPLATE';
export const UPDATE_ENDPOINTS = 'UPDATE_ENDPOINTS';
export const CLEAR_SELECTED_ENDPOINTS = 'CLEAR_SELECTED_ENDPOINTS';
export const TOGGLE_ENDPOINT_LIST_VISIBILITY = 'TOGGLE_ENDPOINT_LIST_VISIBILITY';
export const UPLOAD_FILE = 'UPLOAD_FILE';
export const JOB_ADDED = 'JOB_ADDED';
export const TOGGLE_PREVIOUS_RESULTS = 'TOGGLE_PREVIOUS_RESULTS';

export function getAvailableEndpoints () {
  return { type: GET_AVAILABLE_ENDPOINTS };
}
export function getAvailableTemplates () {
  return { type: GET_AVAILABLE_TEMPLATES };
}
export function getPreviousResults () {
  return { type: GET_PREVIOUS_RESULTS };
}
export function togglePreviousResults () {
  return { type: TOGGLE_PREVIOUS_RESULTS };
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
export function jobAdded (endpoints, file, template) {
  return { type: JOB_ADDED, endpoints, file, template };
}