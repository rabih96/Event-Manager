import React from "react"

const EventCard = ({ event, onDelete }) => {

  const formatDate = (date) => {
    const localDate = new Date(date);
    const utcDate = new Date(localDate.getTime() - localDate.getTimezoneOffset() * 60000);
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return utcDate.toLocaleDateString(undefined, options)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:drop-shadow-xl">
      <h2 className="text-2xl font-bold mb-2 text-gray-800 text-center">{event.title}</h2>
      <p className="text-gray-700 text-center">{event.description}</p>
      <p className="text-gray-700 p-1 pt-3"><strong>From: </strong>{formatDate(event.start_date)}</p>
      <p className="text-gray-700 p-1"><strong>Till: </strong>{formatDate(event.end_date)} </p>
      <div style={{ textAlign: "center", paddingTop: "1rem" }}>
        <button onClick={() => onDelete(event.id)} className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export default EventCard;
