import { useState } from 'react'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import Home from './src'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light'
    },
    cssVariables: true
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  )
}
