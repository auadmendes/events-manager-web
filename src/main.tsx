import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/auadmendes/events-manager-web.git
// git push -u origin main