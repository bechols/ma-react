import React from 'react';
import { Button } from 'react-toolbox/lib/button';
import { Snackbar } from 'react-toolbox/lib/snackbar';
import PropTypes from 'prop-types';
import theme from './Submit.css';

class Submit extends React.Component {
  state = {
    newJobAlert: false
  };

  handleSubmitClick = click => {
    this.setState({ newJobAlert: true });
    return this.props.onSubmitClick(this.props.selectedEndpoints, this.props.uploadedFile, this.props.selectedTemplate);
  }

  handleSnackbarEvent = () => {
    this.setState({ newJobAlert: false });
  }

  render () {
    if (this.props.selectedEndpoints.length && this.props.uploadedFile) {
      return (
        <div>
          <Button primary raised label={'Run analysis'} onClick={this.handleSubmitClick}/>
          <Snackbar
            action='Dismiss'
            active={this.state.newJobAlert}
            label='Running your analysis now.'
            timeout={3000}
            onClick={this.handleSnackbarEvent}
            onTimeout={this.handleSnackbarEvent}
            type='accept'
        />
        </div>
      );
    } else {
      return (null);
    }
  }
}

Submit.PropTypes = {
  availableEndpoints: PropTypes.array.isRequired,
  availableTemplates: PropTypes.array.isRequred,
  selectedEndpoints: PropTypes.array.isRequired,
  selectedTemplate: PropTypes.number,
  uploadedFile: PropTypes.string.isRequired,
  onSubmitClick: PropTypes.func.isRequired
};

export default Submit;
