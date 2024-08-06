import styles from "./account.module.css";
import AccountsHeader from "../components/accounts/AccountsHeader";
import Profile from "../components/accounts/ProfileInfo";
import AccountSettings from "../components/accounts/AccountSettings";
import Support from "../components/accounts/Support";
import TransactionHistory from "../components/accounts/TransactionHistory";

export default function Account() {
  return (
    <div className={styles.container}>
      <AccountsHeader />
      <Profile />
      <AccountSettings />
      <Support />
      <TransactionHistory />
    </div>
  );
}
