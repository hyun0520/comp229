import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter as Router } from 'react-router-dom'
import { LanguageProvider } from './components/LanguageContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <Router>
        <App />
      </Router>
    </LanguageProvider>
  </StrictMode>
)
