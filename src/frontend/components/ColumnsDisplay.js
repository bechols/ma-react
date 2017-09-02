import React from 'react';
import { Table } from 'react-toolbox/lib/table';
import { TableHead } from 'react-toolbox/lib/table';
import { TableRow } from 'react-toolbox/lib/table';
import { TableCell } from 'react-toolbox/lib/table';
import PropTypes from 'prop-types';
import theme from './ColumnsDisplay.css';

const ColumnsDisplay = () => (
  <div className={theme.ColumnsDisplayDiv}>
    <h2>How to format your file for upload</h2>
    <Table selectable={false}>
      <TableHead>
        <TableCell>address</TableCell>
        <TableCell>zipcode</TableCell>
      </TableHead>
      <TableRow>
        <TableCell>123 Main St</TableCell>
        <TableCell>45678</TableCell>
      </TableRow>
      {/*
      {availableEndpoints.map((endpoint, idx) => (
        <TableRow
          key={availableEndpoints[idx].id}
          value={availableEndpoints[idx].id}
          selected={selectedEndpoints.includes(endpoint.id)}
        >
          <TableCell>{endpoint.name}</TableCell>
          <TableCell>{endpoint.description}</TableCell>
        </TableRow>
      ))}
      */}
    </Table>
  </div>
);

ColumnsDisplay.PropTypes = {
  //availableEndpoints: PropTypes.array.isRequired,
  //selectedEndpoints: PropTypes.array.isRequired,
  //onEndpointClick: PropTypes.func.isRequired
};

export default ColumnsDisplay;
