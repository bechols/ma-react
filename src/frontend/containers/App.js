import React from 'react';
import HCAppBar from '../components/HCAppBar.js';      // AppBar with simple overrides
import EndpointContainer from './EndpointContainer';
import TemplateContainer from './TemplateContainer';
import ColumnsContainer from './ColumnsContainer';
import FileContainer from './FileContainer';
import ResultsContainer from './ResultsContainer';

const App = (props) => (
  <div>
    <HCAppBar />
    <section className='Body' style={{ maxWidth: 1000, margin: 'auto' }}>
      <TemplateContainer />
      <EndpointContainer />
      <ColumnsContainer />
      <FileContainer />
      <ResultsContainer />
    </section>
  </div>
);

export default App;
