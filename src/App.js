import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Header from './components/Header';
import Landing from './components/Landing';
import ProductListing from './components/ProductListing';
import ShoppingCart from './components/ShoppingCart';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/products" element={<ProductListing />} />
              <Route path="/cart" element={<ShoppingCart />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
