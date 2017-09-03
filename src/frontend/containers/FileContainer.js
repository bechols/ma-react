import React from 'react';
import { connect } from 'react-redux';
import { uploadFile } from '../actions/actions';
import FileUpload from '../components/FileUpload';

const mapStateToProps = state => {
  return {
    selectedEndpoints: state.selectedEndpoints,
    uploadedFile: state.uploadedFile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFileUpload: (file) => {
      console.log(file);
      dispatch(uploadFile('Portfolio_upload.csv'));
    }
  };
};

const FileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
  )(FileUpload);

export default FileContainer;
