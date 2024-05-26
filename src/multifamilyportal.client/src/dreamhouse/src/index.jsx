import React from 'react';

import './index.css';
import App from './App';
import HouseContextProvider from './components/HouseContext';
import {  } from 'react-router-dom';

export default function DreamHouse() {
    return (
        <div>
            <meta name="theme-color" content="#000000" />
            <meta name="description"
                content="Web site created using create-react-app" />
            <link rel="icon" href="/yourdomain/favicon.ico" />
            <link rel="apple-touch-icon" href="/yourdomain/logo192.png" />
            <link rel="manifest" href="/yourdomain/manifest.json" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                rel="stylesheet" />
            <title>House Search</title>

            <HouseContextProvider>
                
                    <App />
                
            </HouseContextProvider>
        </div>
    );
}
