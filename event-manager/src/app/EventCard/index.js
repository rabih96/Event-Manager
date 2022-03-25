import React from "react";
import axios from 'axios'

const EventCard = ({ event }) => {
  const formatDate = (date) => {
    return Date(date).toLocaleString("en-US", {
      timeZone: "America/New_York",
    });
  };

  const deleteEvent = (event_id) => {
    axios.delete(`http://localhost:8000/api/event/${event_id}`)
        .then(res => console.log(res.data))
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:drop-shadow-xl">
      <h2 className="text-2xl font-bold mb-2 text-gray-800 text-center">{event.title}</h2>
      <p className="text-gray-700 text-center">{event.description}</p>
      <p className="text-gray-700 p-1"><strong>From: </strong>{event.start_date}</p>
      <p className="text-gray-700 p-1"><strong>Till: </strong>{event.end_date} </p>
      <div style={{ textAlign: "center", paddingTop: "1rem" }}>
        <button onClick={() => deleteEvent(event.id)} className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export default EventCard;
