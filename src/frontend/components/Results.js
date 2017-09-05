import React from 'react';
import { Table } from 'react-toolbox/lib/table';
import { TableHead } from 'react-toolbox/lib/table';
import { TableRow } from 'react-toolbox/lib/table';
import { TableCell } from 'react-toolbox/lib/table';
import { Link } from 'react-toolbox/lib/link'
import { NavDrawer } from 'react-toolbox';
import { Button } from 'react-toolbox';
import PropTypes from 'prop-types';
import theme from './Results.css';

class Results extends React.Component {
  render () {
    return (
      <NavDrawer
        width='wide'
        active={this.props.resultsDrawerVisible}
        onOverlayClick={this.props.toggleResultsDrawerVisibility}
        theme={theme}
      >
        <div className={theme.drawerHeader}>
          <h2>Results</h2>
          <Button icon='close' onClick={this.props.toggleResultsDrawerVisibility}/>
        </div>
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
                <TableCell><Link href={result.link}>Download</Link></TableCell>
              </TableRow>
            ))}
          </Table>
      </NavDrawer>
    );
  }
}

Results.PropTypes = {
  resultsDrawerVisible: PropTypes.bool,
  previousResults: PropTypes.array,
  toggleResultsDrawerVisibility: PropTypes.func
};

export default Results;
