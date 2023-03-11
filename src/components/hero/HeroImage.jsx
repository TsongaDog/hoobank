import styles from "../../style.js";
import { robot } from "../../assets/index.js";

export const HeroImage = () => (
  <div className={`flex-1 ${styles.flexCenter} relative my-10 md:my-0`}>
    <img
      src={robot}
      alt="robot"
      className={`relative z-[5] hidden h-[100%] w-[100%] md:block`}
    />
    <div className="pink__gradient absolute top-0 z-[0] h-[35%] w-[40%]" />
    <div className="dimWhite__gradient absolute bottom-40 z-[1] h-[80%] w-[80%] rounded-full" />
    <div className="blue__gradient absolute right-20 bottom-20 z-[0] h-[50%] w-[50%]" />
  </div>
);
