import React from 'react';
import { connect } from 'react-redux';
import { updateEndpoints, toggleEndpointListVisibility } from '../actions/actions';
import EndpointList from '../components/EndpointList';

const mapStateToProps = state => {
  return {
    availableEndpoints: state.availableEndpoints,
    selectedEndpoints: state.selectedEndpoints,
    endpointListVisibility: state.endpointListVisibility
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onEndpointClick: (endpointsSelected, availableEndpoints) => {
      dispatch(updateEndpoints(endpointsSelected, availableEndpoints));
    },
    toggleEndpointListVisibility: () => {
      dispatch(toggleEndpointListVisibility());
    }
  };
};

const EndpointContainer = connect(
  mapStateToProps,
  mapDispatchToProps
  )(EndpointList);

export default EndpointContainer;
