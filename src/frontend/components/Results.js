import React from 'react';
import { Table } from 'react-toolbox/lib/table';
import { TableHead } from 'react-toolbox/lib/table';
import { TableRow } from 'react-toolbox/lib/table';
import { TableCell } from 'react-toolbox/lib/table';
import { Link } from 'react-toolbox/lib/link'
import PropTypes from 'prop-types';
import theme from './Results.css';

class Results extends React.Component {
  render () {
    if (this.props.previousResults && !(this.props.selectedEndpoints.length || this.props.selectedTemplate)) {
      return (
        <div>
          <h2>Recent results</h2>
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
                <TableCell><Link theme={theme} href={result.link}>Download</Link></TableCell>
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
  selectedEndpoints: PropTypes.array.isRequired,
  selectedTemplate: PropTypes.number,
  previousResults: PropTypes.array
};

export default Results;
