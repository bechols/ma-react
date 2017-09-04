import React from 'react';
import { connect } from 'react-redux';
import { submitJob } from '../sagas/sagas';
import Submit from '../components/Submit';

const mapStateToProps = state => {
  return {
    availableEndpoints: state.availableEndpoints,
    availableTemplates: state.availableTemplates,
    selectedEndpoints: state.selectedEndpoints,
    selectedTemplate: state.selectedTemplate,
    uploadedFile: state.uploadedFile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmitClick: (endpoints, file, template) => {
      dispatch({type: 'SUBMIT_JOB', endpoints: endpoints, file: file, template: template});
    }
  };
};

const SubmitContainer = connect(
  mapStateToProps,
  mapDispatchToProps
  )(Submit);

export default SubmitContainer;
