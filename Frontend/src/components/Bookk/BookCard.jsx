import React from 'react'
import { Link } from 'react-router-dom';

const BookCard = ({book, role}) => {
    const {name, author, imageUrl, price} = book;
  return (
    <div className="book-card">
      <img src={imageUrl} alt={name} className="book-image" />
      <div className="book-details">
        <h3>{name}</h3>
        <p>{author}</p>
        <p>{price}</p>
      </div>
      {role === "admin" && (
        <div className="book-actions">
          <button>
            <Link to={`/book/${book._id}`} className="btn-link">
              edit
            </Link>
          </button>
          <button>
            <Link to={`/delete/${book._id}`} className="btn-link">
              delete
            </Link>
          </button>
        </div>
      )}
      {role === "student" && (
        <div className="book-actions">
          <button>
            <Link to={`/buy/${book._id}`} className="btn-link">
              buy
            </Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default BookCard