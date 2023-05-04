import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { IdContextProvider } from './Component/AppContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IdContextProvider>
      <App />
    </IdContextProvider>
    
  </React.StrictMode>,
)
