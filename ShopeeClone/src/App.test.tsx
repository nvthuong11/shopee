import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import matchers from '@testing-library/jest-dom/matchers'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

expect.extend(matchers)

describe('App', () => {
  test('App render và chuyển page', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
  })
})
