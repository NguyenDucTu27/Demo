import React from 'react'
import '../css/Home.css'

const Home = () => {
  
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-text">Welcome to the bookstore</h1>
        <p className="hero-description">
          Please login and click "Books" to buy our books.
        </p>
      </div>
      <div className="hero-image"></div>
    </div>
  );
}

export default Home