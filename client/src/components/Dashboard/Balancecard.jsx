import styles from "./Balancecard.module.css";
import React, { useState } from "react";

const Balanceheader = () => {
  return (
    <legend>
      <h2 className={styles.title}>Balance</h2>
    </legend>
  );
};

const BalanceInfo = () => {
  return (
    <div className={styles.balanceInfoContainer}>
      <p className={styles.description}>
        Your current balance across all banks
      </p>
      <h3 className={styles.currentBalance}>$5,320</h3>
      <div className={styles.remainingContainer}>
        <p className={styles.remainingStatement}>Left to spend this month</p>
        <span className={styles.amountLeft}>$650</span>
      </div>
    </div>
  );
};

const ViewButton = () => {
  return (
    <div className={styles.buttonContainer}>
      <button onClick={() => setShowModal(true)} className={styles.viewButton}>
        View Bank Statements
      </button>
    </div>
  );
};

export default function Balancecard() {
  return (
    <fieldset className={styles.container}>
      <Balanceheader />
      <BalanceInfo />
      <ViewButton />
    </fieldset>
  );
}
