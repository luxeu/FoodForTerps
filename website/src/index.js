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
    <BrowserRouter basename={process.env.PUBLIC_URL || "/"}>
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

reportWebVitals();
