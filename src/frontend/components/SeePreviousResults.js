import React from 'react';
import { Button } from 'react-toolbox';
import PropTypes from 'prop-types';
import theme from './SeePreviousResults.css';

class SeePreviousResults extends React.Component {
  render () {
    if (this.props.previousResults) {
      if (this.props.resultsDrawerVisible) {
        return null;
      } else {
        return (
          <div className={theme.previousResultsButtonDiv}>
            <Button onClick={this.props.showResultsDrawer} label={'View previous results'} />
          </div>
        )
      }
    } else {
      return null;
    }
  }
}

SeePreviousResults.PropTypes = {
  previousResults: PropTypes.array,
  showResultsDrawer: PropTypes.func
};

export default SeePreviousResults;
