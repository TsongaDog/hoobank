import styles from "../style.js";
import { layout } from "../style.js";
import { features } from "../constants/constants.js";
import { Button } from "./Button.jsx";

export const Business = () => {
  return (
    <section id="Features" className={`${layout.section} gap-10`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>
          You do the business, we’ll handle the money.
        </h2>
        <p className={styles.paragraph}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button />
      </div>
      <div className="flex flex-col items-start gap-[24px]">
        {features.map((feature) => {
          return (
            <div
              key={feature.id}
              className="feature-card flex flex-1 flex-col flex-wrap items-center justify-between gap-5 rounded-[20px] px-[20px] py-[10px] ss:flex-row"
            >
              <img
                src={feature.icon}
                alt={feature.icon}
                className="ss:h-[80px] ss:w-[80px] md:h-16 md:w-16"
              />
              <div className="flex flex-col items-center justify-between gap-2 leading-[150%] ss:items-start">
                <h6 className={styles.heading6}>{feature.title}</h6>
                <p className={`${styles.subtitle}`}>{feature.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
