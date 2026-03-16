import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import WebView from '../src/views/webView'

createRoot(document.getElementById('root')).render(
  // TODO: Add Mobile View Handling 
  <StrictMode>
    <WebView />
  </StrictMode>,
)
