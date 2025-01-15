import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { StyledEngineProvider } from '@mui/material'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './index.css'

export const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement!)

root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </React.StrictMode>
)

reportWebVitals()
