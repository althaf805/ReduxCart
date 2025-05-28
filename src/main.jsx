import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import cartstore from './Redux/cartstore.js'


createRoot(document.getElementById('root')).render(
  
   <StrictMode>
    <BrowserRouter>
  <Provider store={cartstore}>
      <App />
  </Provider>
    
    </BrowserRouter>
  </StrictMode>
 
 
)
