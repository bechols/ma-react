import React from 'react';
import { connect } from 'react-redux';
import {
  toggleTemplate,
  toggleEndpointListVisibility,
  clearSelectedEndpoints
} from '../actions/actions';
import Templates from '../components/Templates';

const mapStateToProps = state => {
  return {
    availableEndpoints: state.availableEndpoints,
    availableTemplates: state.availableTemplates,
    selectedEndpoints: state.selectedEndpoints,
    selectedTemplate: state.selectedTemplate
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTemplateClick: (templateId, includedEndpoints, selectedTemplate, availableEndpoints, availableTemplates) => {
      dispatch(toggleTemplate(templateId, includedEndpoints, selectedTemplate, availableEndpoints, availableTemplates));
    },
    onToggleListVisibility: () => {
      dispatch(toggleEndpointListVisibility());
    },
    onClearAll: () => {
      dispatch(clearSelectedEndpoints());
    }
  };
};

const TemplateContainer = connect(
  mapStateToProps,
  mapDispatchToProps
  )(Templates);

export default TemplateContainer;
