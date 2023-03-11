import styles from "../style.js";
import { stats } from "../constants/constants.js";

export const Stats = () => {
  return (
    <div
      className={`flex items-center justify-center ${styles.marginY} rounded-2xl`}
    >
      <div className={`flex flex-col flex-wrap gap-[40px] md:flex-row`}>
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="flex flex-1 flex-col items-center justify-center gap-[20px] md:flex-row"
          >
            <div className={styles.statsValue}>{stat.value}</div>
            <div className={styles.statsTitle}>{stat.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
