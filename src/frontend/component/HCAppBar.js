import React from 'react';
import { AppBar } from 'react-toolbox/lib/app_bar';
import HCLogo from './HCLogo.js';
import theme from './HCAppBar.css';
import PropTypes from 'prop-types';

const HCAppBar = ({ children, ...other }) => (
  <AppBar {...other} theme={theme}>
    <HCLogo /> Match & Append
    {children}
  </AppBar>
);

HCAppBar.propTypes = {
  children: PropTypes.node
};

export default HCAppBar;
