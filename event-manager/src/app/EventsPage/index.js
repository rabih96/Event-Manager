import React, { useState, useEffect } from "react";
import EventCard from "../EventCard";
import EventFormModal from "../EventFormModal";
import axios from "axios";
import "./index.css";

const EventsPage = () => {
  const [response, setResponse] = useState([{}]);
  const [updatedResponse, setUpdatedResponse] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const onRequestClose = () => {
    setIsModalOpen(false);
  };

  const getEvents = () => {
    axios.get("http://localhost:8000/api/event").then((res) => {
      setResponse(res.data);
    });
  };

  const createEvent = (data) => {
    axios.post("http://localhost:8000/api/event", data).then((res) => {
      setUpdatedResponse(res.data);
    });
  };

  const onFormSubmit = (data) => {
    createEvent(data);
    onRequestClose();
  };

  const onDeleteEvent = (event_id) => {
    axios.delete(`http://localhost:8000/api/event/${event_id}`).then((res) => {
      setUpdatedResponse(res.data);
    });
  };

  useEffect(() => {
    getEvents();
  }, [updatedResponse]);

  const renderEvents = () => {
    if (!response || Object.keys(response[0]).length === 0) {
      return <div className="events-page font-bold">Fetching Events...</div>;
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 events-page">
        {response.map((event) => (
          <EventCard key={event.id} event={event} onDelete={onDeleteEvent} />
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="App-header">
        <h1 className="App-title font-bold">Kumojin Event Manager</h1>
        <div className="align-right">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3"
            onClick={openModal}
          >
            Add Event
          </button>
        </div>
      </div>
      <EventFormModal
        isOpen={isModalOpen}
        onClose={onRequestClose}
        onSubmit={onFormSubmit}
      />
      {renderEvents()}
    </div>
  );
};

export default EventsPage;
