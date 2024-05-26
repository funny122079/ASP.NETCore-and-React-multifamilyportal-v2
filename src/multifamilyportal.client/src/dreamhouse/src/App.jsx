import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

// import pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
const App = () => {
  return (
    <div className=" w-full sm:max-w-[80%] mx-auto bg-white ">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
