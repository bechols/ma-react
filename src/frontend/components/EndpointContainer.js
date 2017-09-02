import React from 'react';
import { connect } from 'react-redux';
import { toggleEndpoint } from '../actions/actions';
import EndpointList from './EndpointList';

const mapStateToProps = state => {
  return {
    availableEndpoints: state.availableEndpoints,
    selectedEndpoints: state.selectedEndpoints
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onEndpointClick: (endpointId) => {
      dispatch(toggleEndpoint(endpointId));
    }
  };
};

const EndpointContainer = connect(
  mapStateToProps,
  mapDispatchToProps
  )(EndpointList);

export default EndpointContainer;
