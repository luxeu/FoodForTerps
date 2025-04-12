import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Layout from './pages/Layout';
import Selection from './pages/Selection';
import NavBar from './NavBar';
import DietSelection from './pages/DietSelection';
import CalorieSelection from './pages/CalorieSelection';
import AboutUs from './pages/AboutUs';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/selection/:navId" element={<Selection />} />
        <Route path="/calories/:navId" element={<CalorieSelection />} />
        <Route path="/diet/:navId" element={<DietSelection />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
