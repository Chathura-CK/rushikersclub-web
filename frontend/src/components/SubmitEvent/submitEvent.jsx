import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './submitEvent.css'; // Import the CSS file

const SubmitEvent = ({ onSubmit, eventToEdit }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    if (eventToEdit) {
      setName(eventToEdit.name);
      setImage(eventToEdit.image);
      setDate(eventToEdit.date);
      setDescription(eventToEdit.description);
    }
  }, [eventToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEvent = { name, image, date, description };
    try {
      if (eventToEdit) {
        await axios.put(`https://rushikersclub-backend.azurewebsites.net/api/v1/admin/events/${eventToEdit.id}`, newEvent);
        alert('Event updated successfully');
      } else {
        await axios.post('https://rushikersclub-backend.azurewebsites.net/api/v1/admin/events/new', newEvent);
        alert('Event submitted successfully');
      }
      onSubmit();
    } catch (error) {
      console.error('Error submitting event:', error);
      alert('Failed to submit event. Please try again.');
    }
  };

  const deleteEvent = async () => {
    if (!eventToEdit) return;
    try {
      await axios.delete(`https://rushikersclub-backend.azurewebsites.net/api/v1/admin/events/${eventToEdit.id}`);
      alert('Event deleted successfully');
      onSubmit();
    } catch (error) {
      console.error('Error deleting event:', error);
      alert('Failed to delete event. Please try again.');
    }
  };

  return (
    <div className="submit-post-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">{eventToEdit ? "Update" : "Submit"}</button>
        {eventToEdit && <button type="button" onClick={deleteEvent}>Delete</button>}
      </form>
    </div>
  );
};

export default SubmitEvent;
