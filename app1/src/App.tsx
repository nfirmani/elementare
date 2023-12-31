import React from 'react';
// @mf-types directory is autogenerated when you start the server
import RemoteButtonType from '../@mf-types/Button';

// @ts-expect-error app2/Button is a federated module.
const RemoteButton = React.lazy(() => import('app2/Button')) as unknown as typeof RemoteButtonType;

const App = () => (
  <div>
    <h1>Esempio elementare App1 con "micro-frontend" fornito dalla App2</h1>
    <h2>App 1 (i pulsanti sotto sono forniti da App2)</h2>
    <React.Suspense fallback="Loading Button">
      <RemoteButton size="large" />
      <br />
      <RemoteButton size="small" />
    </React.Suspense>
  </div>
);

export default App;
