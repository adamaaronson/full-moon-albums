import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter, Route, Routes } from 'react-router';
import BestOf2024 from './components/year-end/BestOf2024';
import BestAlbumsOf2024 from './components/year-end/BestOf2024';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <Routes>
            <Route path="/full-moon-albums/" element={<App />} />
            <Route
                path="/full-moon-albums/best-albums-of-2024"
                element={<BestAlbumsOf2024 />}
            />
        </Routes>
    </BrowserRouter>
);
