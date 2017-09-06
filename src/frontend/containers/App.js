import React from 'react';
import { Layout, Panel } from 'react-toolbox';
import HCAppBarContainer from './HCAppBarContainer';
import EndpointContainer from './EndpointContainer';
import TemplateContainer from './TemplateContainer';
import ColumnsContainer from './ColumnsContainer';
import FileContainer from './FileContainer';
import ResultsContainer from './ResultsContainer';
import SubmitContainer from './SubmitContainer';
import SeePreviousResultsContainer from './SeePreviousResultsContainer';

const App = (props) => (
  <Layout>
    <ResultsContainer />
    <Panel>
      <HCAppBarContainer />
      <div className='Body' style={{ maxWidth: 1000, margin: 'auto', alignSelf: 'stretch' }}>
        <TemplateContainer />
        <ColumnsContainer />
        <FileContainer />
        <SubmitContainer />
        <SeePreviousResultsContainer />
        <EndpointContainer />
      </div>
    </Panel>
  </Layout>
);

export default App;
