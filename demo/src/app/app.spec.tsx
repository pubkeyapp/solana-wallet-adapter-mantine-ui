import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { App } from './app'

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    )
    expect(baseElement).toBeTruthy()
  })

  it('should say Hello World', () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    )
    expect(getByText(/Hello World/i)).toBeTruthy()
  })
})
