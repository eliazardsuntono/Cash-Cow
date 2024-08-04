import styles from './CollegeLoans.module.css';

const CollegeLoansHeader = () => {
  return (
    <legend>
      <h2 className={styles.title}>College Loans</h2>
    </legend>
  );
}

export default function CollegeLoans() {
  return (
    <fieldset className={styles.container}>
      <CollegeLoansHeader />
      <div className={styles.remainderContainer}>
        <p className={styles.description}>Monthly college loan payments</p>
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
      <button className={styles.button}>See more</button>
    </fieldset>
  );
}