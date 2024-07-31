import styles from "./rankings.module.css";
import RankingHeader from "../components/ranking/RankingHeader";
import RankingProfile from "../components/ranking/RankingProfile";
import RankingAcheivements from "../components/ranking/RankingAcheivments";

export default function Rankings() {
  return (
    <div className={styles.container}>
      <RankingHeader />
      <RankingProfile />
      <RankingAcheivements />
    </div>
  );
}
