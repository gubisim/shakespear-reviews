import React from 'react';
import ReactDOM from 'react-dom';
import Stars from './Stars';
import { render, screen } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Stars rating={3.5} />, div);
});

it('renders 3 full stars', () => {
    render(<Stars rating={3} />);
    expect(screen.getAllByAltText('Filled in star').length).toBe(3)
});

it('renders 5 full stars on number larger than 5', () => {
    render(<Stars rating={5} />);
    expect(screen.getAllByAltText('Filled in star').length).toBe(5)
});

it('renders 5 empty stars on no rating prop passed', () => {
    render(<Stars/>);
    expect(screen.getAllByAltText('Empty star').length).toBe(5)
});

it('renders 5 empty stars on negative rating passed', () => {
    render(<Stars rating={-1}/>);
    expect(screen.getAllByAltText('Empty star').length).toBe(5)
});

it('renders half star on rating with decimal', () => {
    render(<Stars rating={3.5}/>);
    expect(screen.getAllByAltText('Half filled in star').length).toBe(1)
});
