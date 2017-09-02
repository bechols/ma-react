import React from 'react';
import { connect } from 'react-redux';
import { updateEndpoints } from '../actions/actions';
import EndpointList from '../components/EndpointList';

const mapStateToProps = state => {
  return {
    availableEndpoints: state.availableEndpoints,
    selectedEndpoints: state.selectedEndpoints
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onEndpointClick: (endpointsSelected) => {
      dispatch(updateEndpoints(endpointsSelected));
    }
  };
};

const EndpointContainer = connect(
  mapStateToProps,
  mapDispatchToProps
  )(EndpointList);

export default EndpointContainer;
