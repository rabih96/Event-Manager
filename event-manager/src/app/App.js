import React, { useState, useEffect} from 'react'
import axios from 'axios'
import EventsPage from './EventsPage/index'
import EventFormModal from './EventFormModal/index';
import './App.css';

function App() {

  const [response, setResponse] = useState([{}]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const onRequestClose = () => {
    setIsModalOpen(false);
  };

  const onFormSubmit = (data) => {
    axios.post('http://localhost:8000/api/event/', data)
      .then(res => console.log(res))
  };

  useEffect(() => {
    axios.get('http://localhost:8000/api/event')
      .then(res => {
        setResponse(res.data);
      })
  });

  return (
    <div className="App">
      <EventFormModal isOpen={isModalOpen}
        onClose={onRequestClose}
        onSubmit={onFormSubmit} />
      <div className="App-header">
        <h1 className="App-title font-bold">Kumojin Event Manager</h1>
        <div className='align-right'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3" onClick={openModal}>
            Add Event
          </button>
        </div>
      </div>
      <EventsPage eventList={response}/>
    </div>
  );
}

export default App;
