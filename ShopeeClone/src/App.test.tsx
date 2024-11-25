import { describe, expect, test } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

// describe('App', () => {
//   test('App render và chuyển page', async () => {
//     render(
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     )
//     // Log
//     await waitFor(
//       () => {
//         expect(document.head.querySelector('title')).toBeTruthy()
//       },
//       {
//         timeout: 1000
//       }
//     )
//     screen.debug(document.body.parentElement as HTMLElement, 999999)
//   })
// })

describe('App', () => {
  test('App render và chuyển page', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )

    // Verify vào đúng trang chủ
    // await waitFor(
    //   () => {
    //     expect(document.head.querySelector('title')).toBeTruthy()
    //   },
    //   {
    //     timeout: 1000
    //   }
    // )
    await waitFor(
      () => {
        // expect(document.head.querySelector('title')?.textContent).toBe('Trang chủ | Shopee Clone')
        // expect(document.querySelector('title')?.textContent).toBe('Shopee Clone')
      },
      {
        timeout: 1000
      }
    )

    
    console.log('title........', document.querySelector('title')?.textContent)
    screen.debug(document.body.parentElement as HTMLElement, 999999)
  })
})
