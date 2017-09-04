import React from 'react';
import { Table } from 'react-toolbox/lib/table';
import { TableHead } from 'react-toolbox/lib/table';
import { TableRow } from 'react-toolbox/lib/table';
import { TableCell } from 'react-toolbox/lib/table';
import PropTypes from 'prop-types';
import theme from './ColumnsDisplay.css';
import Tooltip from 'react-toolbox/lib/tooltip';

const TooltipCell = Tooltip(TableCell);

class ColumnsDisplay extends React.Component {

  render () {
    if (this.props.selectedEndpoints.length) {
      return (
        <div className={theme.ColumnsDisplayDiv}>
          <h2>How to format your file for upload</h2>
          <Table selectable={false}>
            <TableHead>
              <TooltipCell tooltip={'Street address line 1'}>address</TooltipCell>
              <TooltipCell tooltip={'5 digit ZIP code'}>zipcode</TooltipCell>
              {this.props.availableEndpoints
                .filter(available => this.props.selectedEndpoints.includes(available.id))
                .map(selectedEntry => selectedEntry.optionalColumns.length ? selectedEntry.optionalColumns : [])
                .reduce((a, b) => a && b ? a.concat(b) : a, []).map((optColumn, idx) => (
                  <TooltipCell key={idx} tooltip={optColumn.contentDescription}>{optColumn.colHeader}</TooltipCell>
                ))
              }
              <TooltipCell tooltip={'Anything!'}>(any other value)</TooltipCell>
            </TableHead>
            <TableRow>
              <TableCell>1234 Main St</TableCell>
              <TableCell>45678</TableCell>
              {this.props.availableEndpoints
                .filter(available => this.props.selectedEndpoints.includes(available.id))
                .map(selectedEntry => selectedEntry.optionalColumns.length ? selectedEntry.optionalColumns : [])
                .reduce((a, b) => a && b ? a.concat(b) : a, []).map((optColumn, idx) => (
                  <TableCell key={idx}>{optColumn.example}</TableCell>
                ))
              }
              <TableCell>(i.e. Portfolio ID number)</TableCell>
            </TableRow>
          </Table>
        </div>
      ); 
    } else {
      return null;
    }
  }
};


ColumnsDisplay.PropTypes = {
  availableEndpoints: PropTypes.array.isRequired,
  selectedEndpoints: PropTypes.array.isRequired
};

export default ColumnsDisplay;
