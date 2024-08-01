import styles from './Dashboardheader.module.css';

export default function Dashboardheader() {
    return(
        <header className={styles.container}>
            <h1 className={styles.title}>Dashboard</h1>
        </header>
    );
}