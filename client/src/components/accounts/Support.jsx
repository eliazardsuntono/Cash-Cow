import styles from "./Support.module.css";

const SupportHeader = () => {
  return (
    <legend>
      <h3 className={styles.supportHeader}>Support and Help</h3>
    </legend>
  );
};

const FAQ = () => {
  return <h5 class={styles.faqHeader}>FAQ</h5>;
};

const ContactSupport = () => {
  return <button className={styles.supportButton}>Contact Support</button>;
};

const Support = () => {
  return (
    <fieldset className={styles.supportContainer}>
      <SupportHeader />
      <div className={styles.contentContainer}>
        <FAQ />
        <ContactSupport />
      </div>
    </fieldset>
  );
};

export default Support;
