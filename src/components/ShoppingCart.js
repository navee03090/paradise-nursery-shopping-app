import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem, removeItem, deleteItem, clearCart } from '../store/cartSlice';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalPrice } = useSelector(state => state.cart);

  const handleIncreaseQuantity = (productId) => {
    dispatch(addItem({ id: productId }));
  };

  const handleDecreaseQuantity = (productId) => {
    dispatch(removeItem(productId));
  };

  const handleDeleteItem = (productId) => {
    dispatch(deleteItem(productId));
  };

  const handleCheckout = () => {
    alert('Thank you for your purchase! Your order has been placed.');
    dispatch(clearCart());
  };

  if (items.length === 0) {
    return (
      <div className="shopping-cart">
        <div className="container">
          <div className="page-header">
            <h1>Shopping Cart</h1>
            <p>Your cart is currently empty</p>
          </div>
          
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added any plants to your cart yet.</p>
            <Link to="/products" className="continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="shopping-cart">
      <div className="container">
        <div className="page-header">
          <h1>Shopping Cart</h1>
          <p>Review your selected plants before checkout</p>
        </div>

        <div className="cart-summary">
          <div className="summary-card">
            <h3>Cart Summary</h3>
            <div className="summary-item">
              <span>Total Items:</span>
              <span>{totalQuantity}</span>
            </div>
            <div className="summary-item total">
              <span>Total Price:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="cart-items">
          {items.map(item => (
            <div key={item.id} className="cart-item">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>
              
              <div className="item-details">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-category">{item.category}</p>
                <p className="item-description">{item.description}</p>
              </div>
              
              <div className="item-price">
                <div className="unit-price">${item.price}</div>
                <div className="total-price">${(item.price * item.quantity).toFixed(2)}</div>
              </div>
              
              <div className="quantity-controls">
                <button 
                  className="quantity-btn"
                  onClick={() => handleDecreaseQuantity(item.id)}
                >
                  -
                </button>
                <span className="quantity">{item.quantity}</span>
                <button 
                  className="quantity-btn"
                  onClick={() => handleIncreaseQuantity(item.id)}
                >
                  +
                </button>
              </div>
              
              <button 
                className="delete-btn"
                onClick={() => handleDeleteItem(item.id)}
                title="Remove item"
              >
                🗑️
              </button>
            </div>
          ))}
        </div>

        <div className="cart-actions">
          <Link to="/products" className="continue-shopping-btn">
            Continue Shopping
          </Link>
          <button className="checkout-btn" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
