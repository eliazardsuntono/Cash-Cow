import styles from "./AccountsHeader.module.css";
import profile from "../../assets/profile.png";

const AccountHeader = () => {
  return (
    <header className={styles.headerContainer}>
      <img
        src={profile}
        alt="A default profile icon"
        className={styles.image}
      />
      <h1 className={styles.header}>Accounts</h1>
    </header>
  );
};

export default AccountHeader;
