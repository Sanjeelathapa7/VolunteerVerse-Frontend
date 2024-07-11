

import React from "react";

import Modal from "react-modal";
 
Modal.setAppElement("#root"); // Assuming your root element has an id 'root'
 
const EventModal = ({ isOpen, onRequestClose, event }) => {

  return (

    <Modal

      isOpen={isOpen}

      onRequestClose={onRequestClose}

      className="modal-content"

      overlayClassName="modal-overlay"

    >

      <div className="modal-header">

        <h2>{event.eventName}</h2>

        <button className="modal-close-button" onClick={onRequestClose}>

          Close

        </button>

      </div>

     

      

      <p>

        <strong>Location:</strong> {event.location}

      </p>

      <p>

        <strong>Date:</strong> {new Date(event.eventTime).toLocaleDateString()}

      </p>

      <button className="modal-close-button" onClick={onRequestClose}>

See More

</button>

      

      

      <style jsx>{`

        .modal-content {

          position: absolute;

          top: 50%;

          left: 50%;

          transform: translate(-50%, -50%);

          background-color: #fff;

          padding: 20px;

          border-radius: 10px;

          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

          max-width: 500px;

          width: 100%;

        }
 
        .modal-overlay {

          position: fixed;

          top: 0;

          left: 0;

          right: 0;

          bottom: 0;

          background-color: rgba(0, 0, 0, 0.5);

          display: flex;

          align-items: center;

          justify-content: center;

          z-index: 9999;

        }
 
        .modal-header {

          display: flex;

          justify-content: space-between;

          align-items: center;

          margin-bottom: 20px;

        }
 
        .modal-header h2 {

          margin: 0;

          font-size: 1.5em;

        }
 
        .modal-close-button {

          background-color: #ff7f50;

          border: none;

          color: #fff;

          padding: 10px 15px;

          border-radius: 5px;

          cursor: pointer;

          transition: background-color 0.3s, transform 0.3s;

        }
 
        .modal-close-button:hover {

          background-color: #e06b50;

          transform: scale(1.05);

        }
 
        .modal-content p {

          font-size: 16px;

          color: #333;

        }
 
        .img-fluid {

          max-width: 100%;

          height: auto;

          border-radius: 10px;

          margin-top: 20px;

        }

      `}</style>

    </Modal>

  );

};
 
export default EventModal;

 