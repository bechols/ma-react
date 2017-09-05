import React from 'react';
import { connect } from 'react-redux';
import { showResultsDrawer } from '../actions/actions';
import SeePreviousResults from '../components/SeePreviousResults';

const mapStateToProps = state => {
  return {
    previousResults: state.previousResults,
    resultsDrawerVisible: state.resultsDrawerVisible
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showResultsDrawer: () => {
      dispatch(showResultsDrawer());
    }
  };
};

const SeePreviousResultsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
  )(SeePreviousResults);

export default SeePreviousResultsContainer;
