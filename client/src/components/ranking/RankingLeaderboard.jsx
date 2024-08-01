import styles from "./RankingLeaderboard.module.css";
import one from "../../assets/leaderboard/one.png";
import two from "../../assets/leaderboard/two.png";
import three from "../../assets/leaderboard/three.png";
import profile from "../../assets/leaderboard/profilePicture.png";
import star from "../../assets/leaderboard/star.png";

const LeaderboardHeader = () => {
  return (
    <legend>
      <h3>Leaderboard</h3>
    </legend>
  );
};

const ProfilePicture = () => {
  return <img src={profile} alt="An icon of a standard profile picture" />;
};

const Crown = () => {
  return (
    <img src={star} alt="An icon a of crown" className={styles.userRight} />
  );
};

const User1Rank = () => {
  return (
    <div className={`${styles.user} ${styles.one}`}>
      <div className={styles.userLeft}>
        <img
          src={one}
          alt="An icon of the number one"
          className={styles.leadboardRanking}
        />
        <ProfilePicture />
        <p className={styles.userName}>Mario Luigi</p>
      </div>
      <div>
        <Crown />
      </div>
    </div>
  );
};

const User2Rank = () => {
  return (
    <div className={`${styles.user} ${styles.two}`}>
      <div className={styles.userLeft}>
        <img
          src={two}
          alt="An icon of the number two"
          className={styles.leadboardRanking}
        />
        <ProfilePicture />
        <p className={styles.userName}>Amadin Ahmed</p>
      </div>
      <div>
        <Crown />
      </div>
    </div>
  );
};

const User3Rank = () => {
  return (
    <div className={`${styles.user} ${styles.three}`}>
      <div className={styles.userLeft}>
        <img
          src={three}
          alt="An icon of the number three"
          className={styles.leadboardRanking}
        />
        <ProfilePicture />
        <p className={styles.userName}>Amadin Ahmed</p>
      </div>
      <div>
        <Crown />
      </div>
    </div>
  );
};

const Leaderboard = () => {
  return (
    <fieldset className={styles.container}>
      <LeaderboardHeader />
      <div className={styles.rankContainer}>
        <User1Rank />
        <User2Rank />
        <User3Rank />
      </div>
    </fieldset>
  );
};

export default Leaderboard;
