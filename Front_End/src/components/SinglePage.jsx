import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from './Loading';
import axios from 'axios';

function SinglePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (location.state?.post) {
        setPost(location.state.post);
        setLoading(false);
      } else {
        navigate('/*');
      }
    }, 1000);
  }, [location.state, navigate]);

  const handleBuyNow = async () => {
    if (!post) return;

    try {

      const userResponse = await axios.get('/users/current');
      const user = userResponse.data;

      if (!user || !user.id || !user.name) {
        throw new Error('User information is missing');
      }

      const response = await axios.post('/orders', {
        user_id: user.id,
        user_name: user.name,
        product_id: post.id,
        product_name: post.name,
      });

      if (response.status === 201) {
        alert('Order added successfully!');
        navigate('/shop');
      } else {
        alert(`Error: ${response.data.error}`);
      }
    } catch (error) {
      alert('Error processing the order');
      console.error(error);
    }
  };


  if (loading) {
    return <Loading />;
  }

  return (
    <div className='main'>
      <section className="post-main">
        {post ? (
          <div className="container">
            <div className="single-post">
              <h1 className="post-title">{post.name}</h1>

              <div className="upper-part-post">
                <div className="post-image-wrap">
                  <img src={post.image} alt={post.name} className="post-image" />
                </div>
                <p className="post-price">✦ - ${post.price} - ✦</p>
              </div>

              <div className="info-part-post">
                <h2>Description</h2>
                <p className="post-detailed-description">{post.detailedDescription}</p>
              </div>

              <div className="info-part-post">
                <h2>Care Instructions</h2>
                <p className="post-flower-instruction">{post.instruction}</p>
              </div>

              <div className="button-container">
                <button className="buy-button" onClick={handleBuyNow}>Buy Now</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="container"><p>No data</p></div>
        )}
      </section>
    </div>
  );
}

export default SinglePage;
