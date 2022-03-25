import React from "react";

const EventCard = ({ event }) => {
  const formatDate = (date) => {
    return Date(date).toLocaleString("en-US", {
      timeZone: "America/New_York",
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:drop-shadow-xl">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">{event.title}</h2>
      <p className="text-gray-700">{event.description}</p>
      <p className="text-gray-700">From: {event.start_date}</p>
      <p className="text-gray-700 pb-3">Till:{event.end_date} </p>
      <div style={{ textAlign: "center" }}>
        <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export default EventCard;
