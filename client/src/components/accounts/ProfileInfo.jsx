import styles from "./ProfileInfo.module.css";

const ProfileHeader = () => {
  return (
    <legend>
      <h3 className={styles.profileHeader}>Profile Info</h3>
    </legend>
  );
};

const ProfileInfo = () => {
  return (
    <div className={styles.profileInfo}>
      <p className={styles.info}>Username: Alex Harper</p>
      <p className={styles.info}>Phone Number: 610-613-9046</p>
      <p className={styles.info}>Email: aharper@gmail.com</p>
    </div>
  );
};

const Profile = () => {
  return (
    <fieldset className={styles.profileContainer}>
      <ProfileHeader />
      <ProfileInfo />
    </fieldset>
  );
};

export default Profile;
