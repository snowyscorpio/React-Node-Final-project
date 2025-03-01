import React from 'react';
import { Link } from 'react-router-dom';

const PlantCard = ({ items, isAdmin, handleDelete }) => {
  return (
    <div id="houseplants" className="container">
      <p className="section-title">Houseplants</p>
      <div className="product-wrap">
        {items.filter(item => item.type === 'houseplant').map((plant) => (
          <div key={plant.id} className="product-card">
            <img src={plant.image} alt={plant.name} className="product-image-plant" />
            <div className="product-content">
              <h2 className="product-title">{plant.name}</h2>
              <p className="product-description">{plant.description}</p>
              <p className="product-price">✦ - ${plant.price} - ✦</p>
              <Link to={`/post/${plant.id}`} state={{ post: plant }} className="view-button">View Plant</Link>

              {isAdmin && (
                <div className="admin-buttons">
                  <Link
                    to={`/editpost/${plant.id}`}
                    state={{ post: plant }}
                    className="edit-button"
                  >
                    Edit
                  </Link>
                  <button className="delete-button" onClick={() => handleDelete(plant)}>Delete</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantCard;
