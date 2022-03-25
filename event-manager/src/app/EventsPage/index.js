import React from "react";
import EventCard from "../EventCard";
import "./index.css";

const EventsPage = ({ eventList }) => {
  return (
    <div className="grid grid-cols-4 gap-4 events-page">
      {eventList.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventsPage;
