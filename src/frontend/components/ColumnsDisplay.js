import React from 'react';
import { Table } from 'react-toolbox/lib/table';
import { TableHead } from 'react-toolbox/lib/table';
import { TableRow } from 'react-toolbox/lib/table';
import { TableCell } from 'react-toolbox/lib/table';
import PropTypes from 'prop-types';
import theme from './ColumnsDisplay.css';

class ColumnsDisplay extends React.Component {

  render () {
    return (
      <div className={theme.ColumnsDisplayDiv}>
        <h2>How to format your file for upload</h2>
        <Table selectable={false}>
          <TableHead>
            <TableCell>address</TableCell>
            <TableCell>zipcode</TableCell>
            {this.props.selectedEndpoints.length
              && this.props.availableEndpoints
                .filter(available => this.props.selectedEndpoints.includes(available.id))
                .map(selectedEntry => selectedEntry.optionalColumns.length ? selectedEntry.optionalColumns : [])
                .reduce((a, b) => a && b ? a.concat(b) : a, []).map((optColumn, idx) => (
                  <TableCell key={idx}>{optColumn.colHeader}</TableCell>
              ))
            }
          </TableHead>
          <TableRow>
            <TableCell>1234 Main St</TableCell>
            <TableCell>45678</TableCell>
            {this.props.selectedEndpoints.length
            && this.props.availableEndpoints
              .filter(available => this.props.selectedEndpoints.includes(available.id))
              .map(selectedEntry => selectedEntry.optionalColumns.length ? selectedEntry.optionalColumns : [])
              .reduce((a, b) => a && b ? a.concat(b) : a, []).map((optColumn, idx) => (
                <TableCell key={idx}>{optColumn.example}</TableCell>
              ))
            }
          </TableRow>
        </Table>
      </div>
    );
  }
};


ColumnsDisplay.PropTypes = {
  availableEndpoints: PropTypes.array.isRequired,
  selectedEndpoints: PropTypes.array.isRequired
};

export default ColumnsDisplay;
