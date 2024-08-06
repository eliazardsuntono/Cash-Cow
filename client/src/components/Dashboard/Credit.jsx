import styles from './Credit.module.css';
import React, { useState } from 'react';
import Modal3 from './Modal/Modal3';

const CreditHeader = () => {
    return (
        <legend>
            <h2 className={styles.title}>Credit Cards</h2>
        </legend>
    );
}

export default function CreditLoans (){
    const [showModal, setShowModal] = useState(false);

    return (
        <fieldset className={styles.container}>
            <CreditHeader />
            <div className={styles.remainderContainer}>
            <p className={styles.description}>Monthly credit card fees</p>
            <div className={styles.rc1}>
                <div className={styles.remainderAndProgress}>
                    <div className={styles.rc2}>
                        <div className={styles.rc3}>
                            <span className={styles.remainingAmount}>$3,500</span>
                            <div className={styles.paymentBar}>
                                <span className={styles.total}>$5,500</span>
                                <span className={styles.total2}>$3,500</span>
                            </div>
                        </div>
                            <h4 className={styles.remainingTitle}>Total Remaining Balance</h4>
                        </div>
                    </div>
                    <div className={styles.rc4}>
                        <span className={styles.paymentAmount}>$250</span>
                        <h4 className={styles.paymentTitle}>Monthly Payment</h4>
                    </div>
                </div>
            </div>
            <button onClick={() => setShowModal(true)}  className={styles.button}>See more</button>
            {showModal && <Modal3 onClose={() => setShowModal(false)} />}
        </fieldset>
    );
}