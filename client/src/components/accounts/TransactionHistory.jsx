import styles from "./TransactionHistory.module.css";

const TransactionHeader = () => {
  return (
    <legend>
      <h3 className={styles.transactionHeader}>Transaction History</h3>
    </legend>
  );
};

const Transaction = () => {
  return (
    <div className={styles.transaction}>
      <div>Asad's Hot Chicken</div>
      <div>$20</div>
    </div>
  );
};

const TransactionHistory = () => {
  return (
    <fieldset className={styles.transactionContainer}>
      <TransactionHeader />
      <div className={styles.transactionsContainer}>
        <Transaction />
        <Transaction />
      </div>
    </fieldset>
  );
};

export default TransactionHistory;
