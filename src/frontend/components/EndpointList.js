import React from 'react';
import { Button } from 'react-toolbox/lib/button';
import { Table } from 'react-toolbox/lib/table';
import { TableHead } from 'react-toolbox/lib/table';
import { TableRow } from 'react-toolbox/lib/table';
import { TableCell } from 'react-toolbox/lib/table';
import PropTypes from 'prop-types';

const EndpointList = ({ availableEndpoints, selectedEndpoints, onEndpointClick }) => (
  <Table multiSelectable>
    <TableHead>
      <TableCell>Endpoint</TableCell>
      <TableCell>Description</TableCell>
    </TableHead>
    {availableEndpoints.map((endpoint, idx) => (
      <TableRow
        key={availableEndpoints[idx].id}
        selected={selectedEndpoints.includes(endpoint.id)}
        onClick={()=>onEndpointClick(availableEndpoints[idx].id)}
      >
        <TableCell>{endpoint.name}</TableCell>
        <TableCell>{endpoint.description}</TableCell>
      </TableRow>
    ))}
  </Table>
);

EndpointList.PropTypes = {
  availableEndpoints: PropTypes.array.isRequired,
  selectedEndpoints: PropTypes.array.isRequired,
  onEndpointClick: PropTypes.func.isRequired
};

export default EndpointList;
