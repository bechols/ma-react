import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-toolbox/lib/button';
import theme from './FileUpload.css';

class FileUpload extends React.Component {

  render () {
    if (this.props.selectedEndpoints.length) {
      return (
        <div>
          <h2>Upload your CSV</h2>
          <Button className={this.props.uploadedFile ? null : theme.mainCTA} onClick={this.props.onFileUpload} label={'Upload spreadsheet'} />
        </div>
      );
    } else {
      return null;
    }
  }
};


FileUpload.PropTypes = {
  selectedEndpoints: PropTypes.array.isRequired,
  uploadedFile: PropTypes.string
};

export default FileUpload;
