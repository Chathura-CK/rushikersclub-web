import React, { useState, useRef, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { motion } from "framer-motion";  
import './Events.css';
import axios from 'axios';

const EventPage = ( {theme} ) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventData, setEventData] = useState([]);
  const detailsRef = useRef(null);

  // Example event data, replace with data fetching (e.g., from an API or Firebase)
  useEffect(() => {
    const fetchEvents = async () => {
      const response = await axios.get('https://rushikersclub-backend.azurewebsites.net/api/v1/events');
      setEventData(response.data);
    };
    fetchEvents();
    if (selectedEvent && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedEvent]);

  return (
    <div className={`event-page${theme}`}>
      <h2 className="page-title">Latest Events</h2>
      <div className="event-container">
        {eventData.map((event) => (
          <motion.div
            key={event.id}
            whileHover={{ scale: 1.05 }}
            className="card-container"
            onClick={() => setSelectedEvent(event)}
          >
            <Card className="event-card" key={event.id}>

            <img src={event.image} alt={event.name} className="event-image" />
            <CardContent className="event-info">
              <h3 className="event-name">{event.name}</h3>
              <p className="event-date">{event.date}</p>
              <p className="event-description">{event.description}</p>
            </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      {selectedEvent && (
        <div className="event-details" ref={detailsRef}>
          <h2 className="details-title">{selectedEvent.name}</h2>
          <img src={selectedEvent.imageUrl} alt={selectedEvent.name} className="details-image" />
          <p>{selectedEvent.description}</p>
          <p>{selectedEvent.date}</p>
          <Button className="close-button" onClick={() => setSelectedEvent(null)}>
            Close
          </Button>
        </div>
      )}
    </div>
  );
};

export default EventPage;