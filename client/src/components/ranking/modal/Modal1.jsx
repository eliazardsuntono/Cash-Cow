import React from "react";
import styles from "./Modal.module.css";
import { X } from "lucide-react";
import acheivement1 from "../../../assets/acheivement1.png";
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
        <div className={styles.background}>
          <div className={styles.makeRow}>
            <h3 className={styles.modalHeader}>Achievement</h3>
            <button onClick={onClose} className={styles.modalButton}>
              <X size={30}></X>
            </button>
          </div>
          <div className={styles.rowDescription}>
            <img
              src={acheivement1}
              alt="A blue dollar sign icon"
              className={styles.acheivementImage}
            />
            <p>
              <span className={styles.blueText}>Cash Money</span> is an
              exclusive award recognizing your exceptional financial
              achievements and smart money management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
