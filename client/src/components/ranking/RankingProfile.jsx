import styles from "./RankingProfile.module.css";
import rankingProgress from "../../assets/rankingprogress.png";
import rankingBar from "../../assets/rankingBar.png";

const ProfileHeader = () => {
  return (
    <legend>
      <h2 className={styles.header}>Profile</h2>
    </legend>
  );
};

const ProfilePicture = () => {
  return (
    <div className={styles.rightProfile}>
      <img
        src={rankingProgress}
        alt="An image of a circular progress bar filled up 75%"
      />
      <h4 className={styles.profileHeader}>Rank: 54</h4>
    </div>
  );
};

const ProfileStats = () => {
  return (
    <div className={styles.statsContainer}>
      <div className={styles.statsTextContainer}>
        <h5 className={styles.statsHeader}>Aashay Gupte</h5>
        <div className={styles.text}>
          <p className={styles.statsText}>Acheivements: 3</p>
          <p className={styles.statsText}>Account ID: #591228</p>
        </div>
      </div>
      <img
        src={rankingBar}
        alt="An image of an icon bar filled 30%"
        class={styles.statsProgress}
      />
    </div>
  );
};

const RankingProfile = () => {
  return (
    <fieldset className={styles.profileContainer}>
      <ProfileHeader />
      <div className={styles.progressContainer}>
        <ProfilePicture />
        <ProfileStats />
      </div>
    </fieldset>
  );
};

export default RankingProfile;
