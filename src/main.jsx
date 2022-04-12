import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/index.css'

const rootContainer = document.getElementById('app')
const root = createRoot(rootContainer)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
