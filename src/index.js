import React from 'react';
import { createRoot } from 'react-dom/client';

const element = (
  <form>
    {/* Stuff here */}
  </form>
);

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(element);