import styles from "./RankingAcheivements.module.css";
import acheivement1 from "../../assets/acheivement1.png";
import acheivement2 from "../../assets/acheivement2.png";
import acheivement3 from "../../assets/acheivement3.png";

const AcheivementsHeader = () => {
  return (
    <legend className={styles.legend}>
      <h3 className={styles.acheivementHeader}>Acheivements</h3>
    </legend>
  );
};

const AcheivementIcon1 = () => {
  return (
    <div className={styles.icons}>
      <img
        src={acheivement1}
        alt="An icon of a dollar sign on a blud background"
      />
      <p className={styles.iconDescription}>Save $100</p>
    </div>
  );
};

const AcheivementIcon2 = () => {
  return (
    <div className={styles.icons}>
      <img src={acheivement2} alt="An icon of a trophy" />
      <p className={styles.iconDescription}>Earn $50</p>
    </div>
  );
};

const AcheivementIcon3 = () => {
  return (
    <div className={styles.icons}>
      <img src={acheivement3} alt="An icon of a burger" />
      <p className={styles.iconDescription}>No takeout</p>
    </div>
  );
};

const AcheivementIcons = () => {
  return (
    <div className={styles.iconContainer}>
      <AcheivementIcon1 />
      <AcheivementIcon2 />
      <AcheivementIcon3 />
    </div>
  );
};

const RankingAcheivements = () => {
  return (
    <fieldset className={styles.container}>
      <AcheivementsHeader />
      <AcheivementIcons />
    </fieldset>
  );
};

export default RankingAcheivements;