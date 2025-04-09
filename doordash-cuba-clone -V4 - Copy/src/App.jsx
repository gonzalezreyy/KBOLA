// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RestaurantPage from './pages/RestaurantPage';
import OrderSummary from './pages/OrderSummary';
import CheckoutPage from './pages/CheckoutPage';
import PaymentPage from './pages/PaymentPage'; 
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<RestaurantPage />} />
        <Route path="/resumen" element={<OrderSummary />} />
        <Route path="/checkout" element={<CheckoutPage />} /> 
        <Route path="/order-summary" element={<OrderSummary />} />      
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
