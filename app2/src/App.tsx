import React from 'react';

import LocalButton from './Button';

const App = () => (
  <div>
    <h1>App 2 </h1>
    <h2>(fornisce componente pulsante con parametro small o large. in App2 viene fornito solo il parametro small)</h2>
    <LocalButton size="small" />
  </div>
);

export default App;
