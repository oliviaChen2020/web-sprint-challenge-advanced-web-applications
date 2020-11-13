import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import BubblePage from './BubblePage';

import { fetchColor as mockFetchColor } from './BubblePage';

jest.mock('./BubblePage');

const mockData = {
  data: [
    {
      color: 'aliceblue',
      code: {
        hex: '#f0f8ff',
      },
      id: 1,
    },
    {
      color: 'limegreen',
      code: {
        hex: '#99ddbc',
      },
      id: 2,
    },
    {
      color: 'aqua',
      code: {
        hex: '#00ffff',
      },
      id: 3,
    },
    {
      color: 'aquamarine',
      code: {
        hex: '#7fffd4',
      },
      id: 4,
    },
    {
      color: 'lilac',
      code: {
        hex: '#9a99dd',
      },
      id: 5,
    },
    {
      color: 'softpink',
      code: {
        hex: '#dd99ba',
      },
      id: 6,
    },
    {
      color: 'bisque',
      code: {
        hex: '#dd9a99',
      },
      id: 7,
    },
    {
      color: 'softyellow',
      code: {
        hex: '#dcdd99',
      },
      id: 8,
    },
    {
      color: 'blanchedalmond',
      code: {
        hex: '#ffebcd',
      },
      id: 9,
    },
    {
      color: 'blue',
      code: {
        hex: '#6093ca',
      },
      id: 10,
    },
    {
      color: 'blueviolet',
      code: {
        hex: '#8a2be2',
      },
      id: 11,
    },
  ],
};

test('Fetches data and renders the bubbles', async () => {
  mockFetchColor.mockResolvedValueOnce(mockData);
  const { getByText, getAllByText } = render(<BubblePage />);

  await waitFor(() => {});
  expect(mockFetchColor).toHaveBeenCalledTimes(1);

  await waitFor(() => {
    getByText(/bubbles/i);
  });

  // Finish this test
});
