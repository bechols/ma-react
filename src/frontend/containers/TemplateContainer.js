import React from 'react';
import { connect } from 'react-redux';
import {
  getAvailableTemplates,
  toggleTemplate,
  toggleEndpointListVisibility
} from '../actions/actions';
import Templates from '../components/Templates';

const mapStateToProps = state => {
  return {
    availableTemplates: state.availableTemplates,
    selectedTemplate: state.selectedTemplate,
    selectedEndpoints: state.selectedEndpoints
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTemplateClick: (templateId, includedEndpoints, selectedTemplate) => {
      console.log(includedEndpoints);
      dispatch(toggleTemplate(templateId, includedEndpoints, selectedTemplate));
    },
    onToggleListVisibility: () => {
      dispatch(toggleEndpointListVisibility());
    }
  };
};

const TemplateContainer = connect(
  mapStateToProps,
  mapDispatchToProps
  )(Templates);

export default TemplateContainer;