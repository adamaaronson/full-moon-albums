import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { HashRouter, Route, Routes } from 'react-router';
import BestAlbumsOf2024 from './components/best-of/BestAlbumsOf2024';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <HashRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/best-albums-of-2024" element={<BestAlbumsOf2024 />} />
        </Routes>
    </HashRouter>
);
