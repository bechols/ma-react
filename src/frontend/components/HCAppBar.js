import React from 'react';
import { AppBar } from 'react-toolbox/lib/app_bar';
import HCLogo from './HCLogo.js';
import theme from './HCAppBar.css';
import PropTypes from 'prop-types';

class HCAppBar extends React.Component {
  render () {
    return (
      <AppBar leftIcon={<HCLogo />} onLeftIconClick={this.props.toggleResultsDrawerVisibility} theme={theme}>
        Match & Append
      </AppBar>
    )
  }
};

export default HCAppBar;
