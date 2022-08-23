import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Fine from './pages/Fine';
import Feeling from './pages/Feeling';
import Care from './pages/Care';
import Thanks from './pages/Thanks';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="fine" element={<Fine />} />
          <Route path="feeling" element={<Feeling />} />
          <Route path="care" element={<Care />} />
          <Route path="thanks" element={<Thanks />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
