import React, { useEffect, useState } from 'react';
import Title from './Title';
import axios from 'axios';
import Loading from './Loading';

function AllUsersList() {
  const [users, setUsers] = useState([]);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
    fetchUserRole();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get('/users');
      setUsers(res.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      setLoading(false);
    }
  };

  const fetchUserRole = async () => {
    try {
      const res = await axios.get('/users/current', { withCredentials: true });
      setRole(res.data.role);
    } catch {
      setRole(null);
    }
  };

  const handleDelete = async (user) => {
    if (role !== 'admin') {
      alert("You do not have permission to delete this user.");
      return;
    }

    if (window.confirm(`Are you sure you want to delete user: ${user.username}?`)) {
      try {
        await axios.delete(`/users/${user.id}`);
        setUsers(users.filter(item => item.id !== user.id));
        alert('User deleted successfully.');
      } catch (error) {
        console.error('Error deleting user:', error);
        alert('Failed to delete user.');
      }
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="main">
      <Title />
      <h2 className="all-users-title">All Users</h2>

      <div className="all-users-container">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <h2 className="user-name">{user.name}</h2>
            <div className="user-info-wrap">


              <img src={user.profile_picture} alt={user.name} className="user-image" />


              <div className="user-info">
                <p className="p-user-info"><strong>Name:</strong> {user.name}</p>
                <p className="p-user-info"><strong>Username:</strong> {user.username}</p>
                <p className="p-user-info"><strong>Email:</strong> {user.email}</p>
                <p className="p-user-info"><strong>Role:</strong> {user.role}</p>
              </div>
            </div>

            <button className="delete-button" onClick={() => handleDelete(user)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllUsersList;
