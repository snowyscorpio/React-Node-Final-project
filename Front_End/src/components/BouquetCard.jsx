import React from 'react';
import { Link } from 'react-router-dom';

const BouquetCard = ({ items, isAdmin, handleDelete }) => {
  return (
    <div id="bouquets" className="container">
      <p className="section-title">Flower Bouquets</p>
      <div className="product-wrap">
        {items.filter(item => item.type === 'bouquet').map((bouquet) => (
          <div key={bouquet.id} className="product-card">
            <img src={bouquet.image} alt={bouquet.name} className="product-image" />
            <div className="product-content">
              <h2 className="product-title">{bouquet.name}</h2>
              <p className="product-description">{bouquet.description}</p>
              <p className="product-price">✦ - ${bouquet.price} - ✦</p>
              <Link to={`/post/${bouquet.id}`} state={{ post: bouquet }} className="view-button">View Flower</Link>

              {isAdmin && (
                <div className="admin-buttons">
                  <Link
                    to={`/editpost/${bouquet.id}`}
                    state={{ post: bouquet }}
                    className="edit-button"
                  >
                    Edit 
                  </Link>
                  <button className="delete-button" onClick={() => handleDelete(bouquet)}>Delete</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BouquetCard;
