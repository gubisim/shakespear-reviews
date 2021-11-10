import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter} from 'react-router-dom'
import Brand from './Brand';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Brand /></MemoryRouter>, div);
});