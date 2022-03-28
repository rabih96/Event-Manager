import React, { useState } from "react";
import "./index.css"
import Modal from "react-modal";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const EventFormModal = ({ isOpen, onClose, onSubmit }) => {
  const { control, register, handleSubmit, reset } = useForm();

  const resetBeforeSubmit = (data) => {
    reset({ title: '', description: '', start_date: '', end_date: '' });
    data["start_date"] = data["start_date"].getTime().toString()
    data["end_date"] = data["end_date"].getTime().toString()
    onSubmit(data);
  };

  // const [startDate, setStartDate] = useState(null);
  // const [endDate, setEndDate] = useState(null);

  return (

    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="EventFormModal"
      overlayClassName="EventFormModal-overlay"
    >
      <div className="EventFormModal-header bg-blue-500">
        <h2>Create Event</h2>
      </div>
      <div className="EventFormModal-content">
        <form onSubmit={handleSubmit(resetBeforeSubmit)}>
          <div className="EventFormModal-form-input">
            <label htmlFor="eventTitle">Title:</label>
            <input id="eventTitle" {...register("title", {required: true})}/>
          </div>
          <div className="EventFormModal-form-input">
            <label htmlFor="eventDesc">Description:</label>
            <input id="eventDesc" {...register("description", {required: true})}/>
          </div>
          <div className="EventFormModal-form-input">
            <label htmlFor="startDate">Starts on:</label>
            <Controller
              control={control}
              name="start_date"
              render={({ field: { onChange, value } }) => (
                <DatePicker
                  onChange={onChange}
                  selected={value}
                  timeInputLabel="Time:"
                  dateFormat="MM/dd/yyyy h:mm aa"
                  showTimeInput
                />
              )}
            />
          </div>
          <div className="EventFormModal-form-input">
            <label htmlFor="endDate">Ends on:</label>
            <Controller
              control={control}
              name="end_date"
              render={({ field: { onChange, value } }) => (
                <DatePicker
                  onChange={onChange}
                  selected={value}
                  timeInputLabel="Time:"
                  dateFormat="MM/dd/yyyy h:mm aa"
                  showTimeInput
                  // minDate={startDate}
                />
              )}
            />
          </div>
          <input type="submit" className="EventFormModal-submit bg-blue-500" />
        </form>
      </div>
    </Modal>
  )
}

export default EventFormModal;
