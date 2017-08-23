import React from 'react';
import HCAppBar from './HCAppBar.js';      // AppBar with simple overrides
import SuccessButton from './SuccessButton.js';    // A button with complex overrides
import { Button } from 'react-toolbox/lib/button'; // Bundled component import

const App = (props) => (
  <div>
    <HCAppBar />
    <section style={{ padding: 20 }}>
      <Button label='Success' primary raised onClick={()=>this.props.onTemplateClick}/>
      <Button label='Primary Button' primary />
    </section>
  </div>
);

export default App;
