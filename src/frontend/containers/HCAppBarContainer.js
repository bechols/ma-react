import React from 'react';
import { connect } from 'react-redux';
import { toggleResultsDrawerVisibility } from '../actions/actions';
import HCAppBar from '../components/HCAppBar';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    toggleResultsDrawerVisibility: () => {
      dispatch(toggleResultsDrawerVisibility());
    }
  };
};

const HCAppBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
  )(HCAppBar);

export default HCAppBarContainer;
