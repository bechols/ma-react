import React from 'react';
import { Button } from 'react-toolbox/lib/button';
import PropTypes from 'prop-types';
import theme from './Submit.css';

class Submit extends React.Component {
  handleSubmitClick = click => {
    return this.props.onSubmitClick(this.props.selectedEndpoints, this.props.uploadedFile, this.props.selectedTemplate);
  }

  render () {
    if (this.props.selectedEndpoints.length && this.props.uploadedFile) {
      return (
        <div>
          <Button primary raised label={'Run analysis'} onClick={this.handleSubmitClick}/>
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
