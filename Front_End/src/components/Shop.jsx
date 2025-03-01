import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Title from './Title';
import BouquetCard from './BouquetCard';
import PlantCard from './PlantCard';
import Loading from './Loading';

function Shop() {
  const [items, setItems] = useState([]);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
    fetchUserRole();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get('/products');
      setTimeout(() => {
        setItems(res.data);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  const fetchUserRole = async () => {
    try {
      const res = await axios.get('/users/current', { withCredentials: true });
      setRole(res.data.role);
    } catch {
      setRole('user');
    }
  };

  const handleDelete = async (post) => {
    if (role !== 'admin') {
      alert("You do not have permission to delete this post.");
      return;
    }

    if (window.confirm(`Are you sure you want to delete post: ${post.title}`)) {
      try {
        await axios.delete(`/products/${post.id}`);
        setItems(items.filter(item => item.id !== post.id));
        alert('Post was deleted');
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    }
  };


  if (loading) {
    return <Loading />;
  }

  return (

    <div className="main">
      <Title />
      <div className="container">
        <h2 className="all-products">All Products</h2>

        <div className="nav-links-container">
          <nav className="nav-links">
            <a href="#bouquets">Bouquets</a>
            <a href="#houseplants">Houseplants</a>
          </nav>
        </div>

        <div className="all-products-container">
          {role === 'admin' && (
            <div className="add-item-button-container">
              <Link to="/createpost" className="add-item-button">Add New Products</Link>
            </div>
          )}

          <BouquetCard items={items} isAdmin={role === 'admin'} handleDelete={handleDelete} />
          <PlantCard items={items} isAdmin={role === 'admin'} handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default Shop;
