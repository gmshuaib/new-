import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';


import HomePage from './pages/Home/HomePage';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen transition-colors duration-500 preview-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            
          </Routes>
          <Watermark isPaidUser={false} />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const Watermark = ({ isPaidUser }: { isPaidUser: boolean }) => {
    return (
        <div style={{ position: 'fixed', bottom: '1rem', right: '1rem', zIndex: 9999 }}>
            <a href="https://webgeny.dev" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: '#000', color: '#fff', borderRadius: 'full', textDecoration: 'none', fontSize: '10px', fontWeight: 'bold' }}>
                Made with WebGeny
            </a>
        </div>
    );
};
