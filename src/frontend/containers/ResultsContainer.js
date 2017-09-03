import React from 'react';
import { connect } from 'react-redux';
import { uploadFile } from '../actions/actions';
import Results from '../components/Results';

const mapStateToProps = state => {
  return {
    previousResults: state.previousResults
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const ResultContainer = connect(
  mapStateToProps,
  mapDispatchToProps
  )(Results);

export default ResultContainer;
