import styles from './Balancecard.module.css';

const Balanceheader = () => {
    return(
        <legend>
            <h2 className={styles.title}>Balance</h2>
        </legend>
    );
}

const BalanceInfo = () => {
    return(
        <div className={styles.balanceInfoContainer}>
            <p>Your current balance across all banks</p>
            <h3>$5,320</h3>
            <div>

            </div>
        </div>
    );
}

export default function Balancecard(){
    return(
        <fieldset className={styles.container}>
            <Balanceheader />
            <BalanceInfo />
        </fieldset>
    )
}