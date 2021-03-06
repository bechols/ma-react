import React from 'react';
import { connect } from 'react-redux';
import { toggleResultsDrawerVisibility } from '../actions/actions';
import Results from '../components/Results';

const mapStateToProps = state => {
  return {
    resultsDrawerVisible: state.resultsDrawerVisible,
    previousResults: state.previousResults
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleResultsDrawerVisibility: () => {
      dispatch(toggleResultsDrawerVisibility());
    }
  };
};

const ResultsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
  )(Results);

export default ResultsContainer;
