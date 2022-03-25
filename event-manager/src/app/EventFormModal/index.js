import React from "react";
import "./index.css"
import Modal from "react-modal";
import { useForm } from "react-hook-form";

const EventFormModal = ({ isOpen, onClose, onSubmit }) => {
  const { register, handleSubmit, reset } = useForm();

  const resetBeforeSubmit = (data) => {
    reset({ title: '', description: '', start_date: '', end_date: '' });
    onSubmit(data);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="EventFormModal"
      overlayClassName="EventFormModal-overlay"
    >
      <div className="EventFormModal-header">
        <h2>Create Event</h2>
      </div>
      <div className="NewPatientModal-content">
        <form onSubmit={handleSubmit(resetBeforeSubmit)}>
          <div className="NewPatientModal-form-input">
            <label htmlFor="eventTitle">Title:</label>
            <input id="eventTitle" {...register("title", {required: true})}/>
          </div>
          <div className="NewPatientModal-form-input">
            <label htmlFor="eventDesc">Description:</label>
            <input id="eventDesc" {...register("description", {required: true})}/>
          </div>
          <div className="NewPatientModal-form-input">
            <label htmlFor="startDate">Starts on:</label>
            <input id="startDate" {...register(
              "start_date",
              {required: true, pattern: /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/}
            )}/>
          </div>
          <div className="NewPatientModal-form-input">
            <label htmlFor="endDate">Ends on:</label>
            <input id="endDate" {...register(
              "end_date",
              {required: true, pattern: /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/}
            )}/>
          </div>
          <div className="NewPatientModal-form-input">
            <input type="submit" className="NewPatientModal-submit" />
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default EventFormModal;
