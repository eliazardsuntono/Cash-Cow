import styles from "./AccountSettings.module.css";

const SettingsHeader = () => {
  return (
    <legend>
      <h3 className={styles.settingHeader}>Account Settings</h3>
    </legend>
  );
};

const LinkedAccounts = () => {
  return (
    <div class={styles.makeRow}>
      <h5 className={styles.childHeader}>Linked Accounts</h5>
      <button className={styles.settingButtons}>Edit Accounts</button>
    </div>
  );
};

const Subscriptions = () => {
  return (
    <div className={styles.makeRow}>
      <h5 className={styles.childHeader}>Subscription</h5>
      <button className={styles.settingButtons}>View</button>
    </div>
  );
};

const AccountSettings = () => {
  return (
    <fieldset className={styles.settingsContainer}>
      <SettingsHeader />
      <div className={styles.settingsInfo}>
        <LinkedAccounts />
        <Subscriptions />
      </div>
    </fieldset>
  );
};

export default AccountSettings;
