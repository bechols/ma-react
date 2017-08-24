import React from 'react';
import { connect } from 'react-redux';
import {
  getAvailableTemplates,
  toggleTemplate,
  toggleEndpointListVisibility
} from '../actions/actions';
import Templates from './Templates';

const mapStateToProps = state => {
  return {
    availableTemplates: state.availableTemplates,
    selectedTemplate: state.selectedTemplate
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTemplateClick: templateId => {
      dispatch(toggleTemplate(templateId));
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
