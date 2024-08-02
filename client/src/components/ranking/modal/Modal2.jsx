import React from "react";
import styles from "./Modal.module.css";
import { X } from "lucide-react";
import acheivement2 from "../../../assets/acheivement2.png";
import { useRef } from "react";

const Modal = ({ onClose }) => {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div ref={modalRef} onClick={closeModal} className={styles.modal}>
      <div className={styles.innerModal}>
        <button onClick={onClose} className={styles.modalButton}>
          <X size={30}></X>
        </button>
        <div className={styles.background}>
          <h3>Acheivement</h3>
          <div className={styles.rowDescription}>
            <img
              src={acheivement2}
              alt="A blue trophy sign icon"
              className={styles.acheivementImage}
            />
            <p>
              <span className={styles.darkBlueText}>Cash Money</span> is a
              prestigious in-app award celebrating users who have reached a
              significant financial milestone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
