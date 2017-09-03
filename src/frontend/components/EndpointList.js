import React from 'react';
import { Table } from 'react-toolbox/lib/table';
import { TableHead } from 'react-toolbox/lib/table';
import { TableRow } from 'react-toolbox/lib/table';
import { TableCell } from 'react-toolbox/lib/table';
import PropTypes from 'prop-types';

class EndpointList extends React.Component {
  handleRowSelect = selected => {
    return this.props.onEndpointClick(selected, this.props.availableEndpoints)
  }

  render () {
    if (this.props.endpointListVisibility) {
      return (
        <Table multiSelectable onRowSelect={this.handleRowSelect}>
          <TableHead>
            <TableCell>Endpoint</TableCell>
            <TableCell>Description</TableCell>
          </TableHead>
          {this.props.availableEndpoints.map((endpoint, idx) => (
            <TableRow
              key={this.props.availableEndpoints[idx].id}
              value={this.props.availableEndpoints[idx].id}
              selected={this.props.selectedEndpoints.includes(endpoint.id)}
            >
              <TableCell>{endpoint.name}</TableCell>
              <TableCell>{endpoint.description}</TableCell>
            </TableRow>
          ))}
        </Table>
      );
    } else {
      return (null);
    }
  }
}

EndpointList.PropTypes = {
  availableEndpoints: PropTypes.array.isRequired,
  selectedEndpoints: PropTypes.array.isRequired,
  endpointListVisibility: PropTypes.bool.isRequired,
  onEndpointClick: PropTypes.func.isRequired
};

export default EndpointList;
