import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';

export default function Login() {
    return (
        <div>
            <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta
              name="description"
              content="Web site created using create-react-app"
            />
            <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
           
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
            
            <title>Login</title>

            <App />

        </div>
    );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
