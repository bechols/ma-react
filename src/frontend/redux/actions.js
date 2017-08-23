export const GET_AVAILABLE_ENDPOINT = 'GET_AVAILABLE_ENDPOINT';
export const GET_AVAILABLE_TEMPLATE = 'GET_AVAILABLE_TEMPLATE';
export const GET_PREVIOUS_JOB = 'GET_PREVIOUS_JOB';
export const GET_REQUIRED_INPUT_COLUMN = 'GET_REQUIRED_INPUT_COLUMN';
export const SELECT_TEMPLATE = 'SELECT_TEMPLATE';
export const SELECT_ENDPOINT = 'SELECT_ENDPOINT';
export const TOGGLE_ENDPOINT_LIST_VISIBILITY = 'TOGGLE_ENDPOINT_LIST_VISIBILITY';
export const TOGGLE_OPTIONAL_INPUT_COLUMNS = 'TOGGLE_OPTIONAL_INPUT_COLUMNS';
export const UPLOAD_FILE = 'UPLOAD_FILE';

export function selectTemplate (template) {
  return { type: SELECT_TEMPLATE, template };
}
export function selectEndpoint (endpoint) {
  return { type: SELECT_ENDPOINT, endpoint };
}
export function toggleEndpointListVisibility (visibility) {
  return { type: TOGGLE_ENDPOINT_LIST_VISIBILITY, visibility };
}
export function toggleOptionalInputColumns (endpoint) {
  return { type: TOGGLE_OPTIONAL_INPUT_COLUMNS, endpoint };
}
export function uploadFile (file) {
  return { type: UPLOAD_FILE, file };
}
