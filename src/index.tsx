import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const root = document.getElementById('root');
if (root) {
    createRoot(root).render(
        // <React.StrictMode>
            <Router>
            <App />
            </Router>
        // </React.StrictMode>
    );
}

console.log('NODE_ENV', process.env.NODE_ENV);
console.log('BASE_ENV', process.env.BASE_ENV);