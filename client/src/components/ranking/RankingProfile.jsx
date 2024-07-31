import styles from "./RankingProfile.module.css";
import rankingProgress from "../../assets/rankingprogress.png";

const ProfileHeader = () => {
  return (
    <legend>
      <h2 className={styles.header}>Profile</h2>
    </legend>
  );
};

const ProfilePicture = () => {
  return (
    <div>
      <img
        src={rankingProgress}
        alt="An image of a circular progress bar filled up 75%"
      />
    </div>
  );
};

const ProfileName = () => {
  return (
    <div>
      <h3 className={styles.profileName}>Aashay Gupte</h3>
    </div>
  );
};

const RankingProfile = () => {
  return (
    <fieldset className={styles.profileContainer}>
      <ProfileHeader />
      <div className={styles.progressContainer}>
        <ProfilePicture />
        <ProfileName />
      </div>
    </fieldset>
  );
};

export default RankingProfile;
