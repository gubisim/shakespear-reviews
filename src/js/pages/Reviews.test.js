import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter} from 'react-router-dom'
import Reviews from './Reviews';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Reviews /></MemoryRouter>, div);
});