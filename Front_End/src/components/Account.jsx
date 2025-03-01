import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Loading from './Loading';
import Title from './Title';
import visibleIcon from '../assets/images/visible.png';
import invisibleIcon from '../assets/images/invisible.png';

function Account() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showVerifyForm, setShowVerifyForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const res = await axios.get('/users/current', { withCredentials: true });
        setTimeout(() => {
          setUser(res.data);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching user:', error);
        setLoading(false);
        navigate('/login');
        window.location.reload();
      }
    };

    fetchUser();
  }, [navigate]);

  const handleDeleteClick = () => {
    setShowVerifyForm(true);
  };

  const handleCancelDelete = () => {
    setShowVerifyForm(false);
    setEmail('');
    setPassword('');
  };

  const handleVerifyAndDelete = async () => {
    if (!username || !email || !password) {
      alert('Please enter your username, email, and password to verify your identity.');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('/users/verify', { username, email, password }, { withCredentials: true });

      if (response.data.valid) {
        const confirmDelete = window.confirm('Are you sure you want to delete your account? This action cannot be undone.');
        if (confirmDelete) {
          await axios.delete(`/users/${user.id}`, { withCredentials: true });
          alert('Account deleted successfully');
          navigate('/register');
        }
      } else {
        alert('Invalid username, email, or password. Please try again.');
      }
    } catch (error) {
      console.error('Error verifying user:', error);
      alert('Error verifying user. Please try again.');
    }
    setLoading(false);
  };

  const handleLogout = () => {
    setLoading(true);
    axios.post('/users/logout', {}, { withCredentials: true })
      .then(() => {
        setUser(null);
        navigate('/login');
        window.location.reload();
      })
      .catch(err => console.error('Logout failed:', err))
      .finally(() => setLoading(false));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if (loading || !user) {
    return <Loading />;
  }

  return (
    <div className="main">
      <Title />
      <h2>My Account</h2>
      <div className="account-container">
        <div className="user-info-wrap">
          <div className="user-info">
            <p className="p-contact">Profile picture: </p>
            <div className="pic-buttons-container">
              <img src={user.profile_picture} alt="Profile" className="profile-pic" />
              <div className="button-group">
                <div className="container">
                  <Link to={`/editaccount/${user.id}`} className="edit-button">Edit</Link>
                </div>

                {!showVerifyForm ? (
                  <button className="delete-button" onClick={handleDeleteClick}>Delete</button>
                ) : (
                  <div className="delete-section">
                    <div className="input-wrap">
                        <div className="delete-section">
                          <p className="p-delete">Enter Username: </p>
                          <input
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                          />
                        </div>
                      <div className="delete-section">
                          <p className="p-delete">Enter Email: </p>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="delete-section">
                          <p className="p-delete">Enter Password: </p>
                        <div className="password-container">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <span className="password-toggle" onClick={togglePasswordVisibility}>
                            <img src={showPassword ? invisibleIcon : visibleIcon} alt="Toggle visibility" className="eye-icon" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="button-group">
                      <button className="confirm-delete-button" onClick={handleVerifyAndDelete}>Confirm & Delete</button>
                      <button className="cancel-button" onClick={handleCancelDelete}>Cancel</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="user-info">
            <p className="p-contact">Name: </p>
            <p className="p-user-info">{user.name}</p>
            <p className="p-contact">Username: </p>
            <p className="p-user-info">{user.username}</p>
            <p className="p-contact">Email: </p>
            <p className="p-user-info">{user.email}</p>
            <p className="p-contact">Role: </p>
            <p className="p-user-info">{user.role}</p>
          </div>
        </div>

        <button className="logout-button" onClick={handleLogout}>Log Out</button>

      </div>
    </div>

  );
}

export default Account;
