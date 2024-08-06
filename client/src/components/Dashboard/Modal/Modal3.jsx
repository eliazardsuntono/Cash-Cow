import styles from './Modal3.module.css';
import { X } from "lucide-react";
import React, { useRef } from "react";

export default function Modal2({ onClose }) {
    const modalRef = useRef();
    const closeModal = (e) => {
        if (modalRef.current === e.target) {
          onClose();
        }
    };

    return (
        <div ref={modalRef} onClick={closeModal} className={styles.modal}>
            <div className={styles.innerModal}>
                <div className={styles.container}>
                    <div className={styles.headerContainer}>
                        <h1 className={styles.t1}>Credit Loans</h1>
                        <button onClick={onClose} className={styles.modalButton}>
                            <X size={20}></X>
                        </button>
                    </div>
                    <p className={styles.d1}>Monthly college loan payments</p>
                    <span className={styles.remainingAmount}>$3,500</span>
                    <h4 className={styles.d2}>Remaining Balance</h4>
                    <span className={styles.dueAmount}>$250</span>
                    <h4 className={styles.d3}>Due by January 15th</h4>
                    <span className={styles.interestAmount}>5%</span>
                    <h4 className={styles.d4}>Interest Rate</h4>
                    <div className={styles.c1}>
                        <div className={styles.dueContainer}>
                            <h5 className={styles.dueStatement}>January 15th, 2025</h5>
                            <p className={styles.d5}>Final Deadline</p>
                        </div>
                        <button className={styles.editBudget}>Edit Budget</button>
                    </div>
                    <div className={styles.paymentBar}>
                        <span className={styles.total}>$5,500</span>
                        <span className={styles.total2}>$3,500</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
