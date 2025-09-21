import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';
import { products, categories } from '../data/products';
import './ProductListing.css';

const ProductListing = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="product-listing">
      <div className="container">
        <div className="page-header">
          <h1>Our Plant Collection</h1>
          <p>Discover our carefully curated selection of beautiful houseplants</p>
        </div>

        <div className="category-filter">
          <button 
            className={`filter-btn ${selectedCategory === 'All' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('All')}
          >
            All Plants
          </button>
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-category">{product.category}</div>
              </div>
              
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-price">${product.price}</div>
                
                <button 
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(product)}
                >
                  <span className="cart-icon">🛒</span>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="no-products">
            <p>No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListing;
