import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import QualquerCoisa from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QualquerCoisa />

    <h1>Ola Mundo! </h1>
  </StrictMode>,
);
