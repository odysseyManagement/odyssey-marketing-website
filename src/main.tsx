import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import ErrorBoundary from './components/error/ErrorBoundary.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>        <HelmetProvider>

    <BrowserRouter>
      <ErrorBoundary fallback={<h1>Something went wrong.</h1>}>
          <App />

      </ErrorBoundary>
    </BrowserRouter>     </HelmetProvider>
  </StrictMode>,
)
