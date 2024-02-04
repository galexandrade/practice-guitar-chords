import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@7shifts/sous-chef/dist/index.css';
import { SousChefProvider } from '@7shifts/sous-chef';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <SousChefProvider>
            <App />
        </SousChefProvider>
    </React.StrictMode>
);
