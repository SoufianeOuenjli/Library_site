import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Home from './Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './Nav.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      {/* <Fonts />    */}
    {/* <App /> */}
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<App />} />
      </Routes>
    </BrowserRouter> 
  </StrictMode>,
)
