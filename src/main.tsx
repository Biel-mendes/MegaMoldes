import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import App from './App.tsx'

import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

const theme = createTheme({
  colorSchemes: {
    light: { palette: { primary: { main: '#0b4fa8' }, secondary: { main: '#f26a1b' } } },
    dark: { palette: { primary: { main: '#3b82e6' }, secondary: { main: '#ff8a3d' } } },
  },
  typography: { fontFamily: 'Inter, sans-serif' },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
