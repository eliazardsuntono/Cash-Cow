import styles from "./rankings.module.css";
import RankingHeader from "../components/ranking/RankingHeader";
import RankingProfile from "../components/ranking/RankingProfile";

export default function Rankings() {
  return (
    <div>
      <RankingHeader />
      <RankingProfile />
    </div>
  );
}
