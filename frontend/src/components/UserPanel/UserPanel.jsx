import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserPanel.css';

const UserPanel = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', role: '' });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://rushikersclub-backend.azurewebsites.net/api/v1/admin/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user.id);
    setFormData({ name: user.name, email: user.email, role: user.role });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://rushikersclub-backend.azurewebsites.net/api/v1/admin/users/${id}`);
      alert('User deleted successfully');
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingUser) {
        await axios.put(`https://rushikersclub-backend.azurewebsites.net/api/v1/admin/users/${editingUser}`, formData);
        alert('User updated successfully');
      }
      setEditingUser(null);
      setFormData({ name: '', email: '', role: '' });
      fetchUsers();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className="user-panel">
      <h2>All Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email}) - {user.role}
            <button onClick={() => handleEdit(user)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {editingUser && (
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
          <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
          <input type="text" placeholder="Role" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} required />
          <button type="submit">Update User</button>
        </form>
      )}
    </div>
  );
};

export default UserPanel;
