import React from 'react';
import { Table } from 'react-toolbox/lib/table';
import { TableHead } from 'react-toolbox/lib/table';
import { TableRow } from 'react-toolbox/lib/table';
import { TableCell } from 'react-toolbox/lib/table';
import PropTypes from 'prop-types';

class Results extends React.Component {
  render () {
    if (this.props.previousResults) {
      return (
        <div>
          <h2>Earlier jobs</h2>
          <Table selectable={false}>
            <TableHead>
              <TableCell>Date</TableCell>
              <TableCell>File uploaded</TableCell>
              <TableCell>Result</TableCell>
            </TableHead>
            {this.props.previousResults.map((result, idx) => (
              <TableRow key={idx}>
                <TableCell>{result.date}</TableCell>
                <TableCell>{result.file}</TableCell>
                <TableCell>{result.link}</TableCell>
              </TableRow>
            ))}
          </Table>
        </div>
      );
    } else {
      return (null);
    }
  }
}

Results.PropTypes = {
  availableEndpoints: PropTypes.array.isRequired,
  selectedEndpoints: PropTypes.array.isRequired,
  uploadedFile: PropTypes.string
};

export default Results;
