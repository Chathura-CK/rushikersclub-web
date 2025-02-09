import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './submitPost.css'; // Import the CSS file

const SubmitPost = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { title, image, description };
    try{
      await axios.post('https://rushikersclub-backend.azurewebsites.net/api/v1/magazine/submit', newPost);
    alert('Post submitted successfully');
    onSubmit();
    } catch (error) {
      console.error('Error submitting post:', error);
      alert('Failed to submit post. Please try again.');
    }
    
  };

  return (
    <div className="submit-post-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SubmitPost;