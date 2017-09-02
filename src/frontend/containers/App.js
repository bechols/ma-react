import React from 'react';
import HCAppBar from '../components/HCAppBar.js';      // AppBar with simple overrides
import EndpointContainer from './EndpointContainer';
import TemplateContainer from './TemplateContainer';

const App = (props) => (
  <div>
    <HCAppBar />
    <section className='Body' style={{ maxWidth: 1000, margin: 'auto' }}>
      <TemplateContainer />
      <EndpointContainer />
    </section>
  </div>
);

export default App;
