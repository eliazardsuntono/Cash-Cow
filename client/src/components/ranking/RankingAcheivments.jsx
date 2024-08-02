import styles from "./RankingAcheivements.module.css";
import acheivement1 from "../../assets/acheivement1.png";
import acheivement2 from "../../assets/acheivement2.png";
import acheivement3 from "../../assets/acheivement3.png";
import Modal1 from "./modal/Modal1";
import Modal2 from "./modal/Modal2";
import Modal3 from "./modal/Modal3";
import React, { useState } from "react";

const AcheivementsHeader = () => {
  return (
    <legend className={styles.legend}>
      <h3 className={styles.acheivementHeader}>Acheivements</h3>
    </legend>
  );
};

const AcheivementIcon1 = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.icons}>
      <button onClick={() => setShowModal(true)} className={styles.resetButton}>
        <img
          src={acheivement1}
          alt="An icon of a dollar sign on a blue background"
        />
      </button>
      <p className={styles.iconDescription}>Save $100</p>
      {showModal && <Modal1 onClose={() => setShowModal(false)} />}
    </div>
  );
};

const AcheivementIcon2 = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.icons}>
      <button onClick={() => setShowModal(true)} className={styles.resetButton}>
        <img
          src={acheivement2}
          alt="An icon of a trophy"
          className={styles.resetButton}
        />
      </button>
      <p className={styles.iconDescription}>Earn $50</p>
      {showModal && <Modal2 onClose={() => setShowModal(false)} />}
    </div>
  );
};

const AcheivementIcon3 = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.icons}>
      <button onClick={() => setShowModal(true)} className={styles.resetButton}>
        <img src={acheivement3} alt="An icon of a burger" />
      </button>
      <p className={styles.iconDescription}>No takeout</p>
      {showModal && <Modal3 onClose={() => setShowModal(false)} />}
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
