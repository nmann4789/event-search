import React from 'react';
import {findByTestId, fireEvent, render, screen, waitFor} from '@testing-library/react';
import App from './App';

describe('<App>', () => {
  test('successfully hides Results component when events length is 0', () => {
    // Render the App component
    render(<App />);

    const testComponent = screen.queryByTestId('test-div');
    expect(testComponent).toBeInTheDocument()

    // The Results component should not be in the DOM when events length is 0
    const resultsComponent = screen.queryByTestId('results-region');
    expect(resultsComponent).not.toBeInTheDocument()
  });

  test('successfully renders Results component when events length is greater than 0', async () => {
    // Render the App component
    render(<App />);

    fireEvent.change(screen.getByLabelText('What city would you like to visit?'), { target: { value: 'Boston' } });
    fireEvent.change(screen.getByLabelText('What month will you be travelling there?'), { target: { value: 'April' } });
    fireEvent.change(screen.getByLabelText('Would you like to see events during the Day or Night?'), { target: { value: 'Day' } });
    fireEvent.change(screen.getByLabelText('What kind of event would you like to see?'), { target: { value: 'Concert' } });

    fireEvent.click(screen.getByTestId('show-results-button'));

    const results = await screen.findByTestId('results-region')

    expect(results).toBeInTheDocument();
  });
})
