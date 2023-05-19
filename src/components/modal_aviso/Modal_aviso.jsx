import React from 'react'
import './modal_aviso.css'
import Modal from 'react-modal';
import { BsCheckCircle } from "react-icons/bs";
import { FcHighPriority } from "react-icons/fc"

function Modal_aviso({aviso, icone, isOpen, onRequestClose, closeModal }) {
    let IconeComponent;
  switch (icone) {
    case 'success':
      IconeComponent = BsCheckCircle;
      break;
    case 'error':
      IconeComponent = FcHighPriority;
      break;
  }
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    className="modal"
    overlayClassName="modal-overlay"
  >
    <div className="modal-content">
      <IconeComponent size={45} style={{color: 'green'}}/>
      <h3>{aviso}</h3>
      <button className="modal-close" onClick={closeModal}>
        OK
      </button>
    </div>
  </Modal>
  )
}

export default Modal_aviso