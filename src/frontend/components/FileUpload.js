import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-toolbox/lib/button';
import style from './FileUpload.css';

class FileUpload extends React.Component {

  render () {
    if (this.props.selectedEndpoints.length) {
      return (
        <div>
          <h2>Upload your CSV</h2>
          <div className={style.fileArea}>
            <Button className={this.props.uploadedFile ? null : style.mainCTA} onClick={this.props.onFileUpload} label={'Upload spreadsheet'} />
            {this.props.uploadedFile ? <h3 style={{marginLeft: 50}}>{this.props.uploadedFile}</h3> : null}
          </div>
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
