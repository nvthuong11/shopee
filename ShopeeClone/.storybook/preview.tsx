import type { Preview } from '@storybook/react'
import React from 'react';
import '../src/index.css';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProvider } from '../src/contexts/app.context';
import ErrorBoundary from '../src/components/ErrorBoundary';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0
    }
  }
})

export const decorators = [
  (Story) => {
    return (
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AppProvider>
            <ErrorBoundary>
              <Story />
            </ErrorBoundary>
          </AppProvider>
        </QueryClientProvider>
      </BrowserRouter>
    )
  }
];