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
  return <img src={star} alt="An icon a of crown" />;
};

const User1Rank = () => {
  return (
    <div className={styles.user}>
      <div className={styles.userRight}>
        <img
          src={styles.rankingPhoto}
          alt="An icon of the number one"
          className={styles.one}
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

const Leaderboard = () => {
  return (
    <fieldset>
      <LeaderboardHeader />
      <User1Rank />
    </fieldset>
  );
};

export default Leaderboard;
