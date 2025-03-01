import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from './Loading';

function EditAccount() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: '', email: '', profile_picture: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      axios.get('/users/current', { withCredentials: true })
        .then(res => {
          if (res.data && res.data.id) {
            setUser(res.data);
          } else {
            console.error("User data is missing an ID!");
            navigate('/login');
          }
          setLoading(false);
        })
        .catch(err => {
          console.error('Error fetching user:', err);
          setLoading(false);
          navigate('/login');
        });
    }, 1000);  
  }, [navigate]);


  const handleChange = (e) => {
    if (e.target.name === "profile_picture") {
      const file = e.target.files[0];
      if (file) {
        setUser(prev => ({ ...prev, profile_picture: file }));
      }
    } else {
      setUser(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!user.id) {
      console.error("User ID is missing!");
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', user.name);
      formData.append('email', user.email);
      formData.append('username', user.username);
      if (user.profile_picture instanceof File) {
        formData.append('profile_picture', user.profile_picture);
      }

      await axios.put(`/users/${user.id}`, formData, {
        withCredentials: true,
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      setLoading(false);
      alert('Account updated successfully!');
      navigate('/account', { replace: true });

    } catch (error) {
      console.error('Error updating account:', error);
      alert('Error updating account');
      setLoading(false);
    }
  };


  if (loading) {
    return <Loading />;
  }


  return (
    <div className="main">
      <div className="container">
        <h2 className="edit-item-title">Edit Account</h2>
        <div className="edit-item-container">
          <form onSubmit={handleSubmit} className="edit-item-form" encType="multipart/form-data">
            <input type="text" name="name" value={user.name} onChange={handleChange} required />
            <input type="text" name="username" value={user.username} onChange={handleChange} required />
            <input type="email" name="email" value={user.email} onChange={handleChange} required />
            <div className="file-input-container">
              <input type="file" name="profile_picture" accept="image/*" onChange={handleChange} className="file-input" />
              {user.profile_picture && (
                <img
                  src={typeof user.profile_picture === 'string' ? user.profile_picture : URL.createObjectURL(user.profile_picture)}
                  alt="Preview"
                  className="image-preview"
                />
              )}
            </div>
            <button type="submit">Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditAccount;
