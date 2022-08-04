import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter,  Routes, Route, } from "react-router-dom";
import Liquidity from './pages/Liquidity';
import Farms from './pages/Farms';
import Pools from './components/Pools';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/liquidity" element={<Liquidity/>} />
        <Route path="/farms" element={<Farms/>} />
        <Route path="/pools" element={<Pools/>} />

       
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
)
