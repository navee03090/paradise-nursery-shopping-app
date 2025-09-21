import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-icon">🌿</span>
          Paradise Nursery
        </Link>
        
        <nav className="nav">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/products" 
            className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`}
          >
            Plants
          </Link>
          <Link 
            to="/cart" 
            className={`nav-link cart-link ${location.pathname === '/cart' ? 'active' : ''}`}
          >
            <span className="cart-icon">🛒</span>
            {totalQuantity > 0 && (
              <span className="cart-badge">{totalQuantity}</span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
