import React from 'react';
import HCAppBar from '../components/HCAppBar.js';      // AppBar with simple overrides
import EndpointList from '../components/EndpointList';
import TemplateContainer from '../components/TemplateContainer';

const App = (props) => (
  <div>
    <HCAppBar />
    <section className='Body' style={{ maxWidth: 1000, margin: 'auto' }}>
      <TemplateContainer />
      <EndpointList />
    </section>
  </div>
);

export default App;
