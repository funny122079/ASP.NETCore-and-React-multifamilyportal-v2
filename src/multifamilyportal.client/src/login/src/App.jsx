import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Registration from "./pages/Registration"
import ForgotPassword from "./pages/ForgotPassword"
import "./App.css"
import DefaultLogin from './pages/DefaultLogin'

function App() {
  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route exact path="/" element={<DefaultLogin />} />
        <Route exact path="/account/login" element={<DefaultLogin />} />
        <Route exact path="/account/signup" element={<Registration />} />
        <Route exact path="/account/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;