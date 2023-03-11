import { layout } from "../style.js";
import styles from "../style.js";
import { card } from "../assets/index.js";
import { Button } from "./Button.jsx";

export const Card = () => {
  return (
    <section className={`${layout.section} gap-16`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Find a better card deal in few easy steps.
        </h2>
        <p className={`${styles.paragraph}`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button />
      </div>
      <div className={`${layout.sectionImg} max-h-[449px] max-w-[513px]`}>
        <img src={card} alt="card" />
      </div>
    </section>
  );
};
