import React from "react";
import styles from "./Modal.module.css";
import { X } from "lucide-react";
import acheivement3 from "../../../assets/acheivement3.png";
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
              src={acheivement3}
              alt="A blue dollar sign icon"
              className={styles.acheivementImage}
            />
            <p>
              <span className={styles.redText}>Cash Money</span> is an exclusive
              award recognizing your exceptional financial acheivements and
              smart money management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
