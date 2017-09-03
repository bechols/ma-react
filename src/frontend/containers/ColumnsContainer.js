import React from 'react';
import { connect } from 'react-redux';
import ColumnsDisplay from '../components/ColumnsDisplay';

const mapStateToProps = state => {
  return {
    availableEndpoints: state.availableEndpoints,
    selectedEndpoints: state.selectedEndpoints
  };
};

const ColumnsContainer = connect(
  mapStateToProps
  )(ColumnsDisplay);

export default ColumnsContainer;
