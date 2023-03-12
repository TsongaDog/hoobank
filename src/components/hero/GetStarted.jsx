import { arrowUp } from "../../assets/index.js";
import styles from "../../style.js";

export const GetStarted = () => (
  <div
    className={`${styles.flexStart} bg-blue-gradient h-[140px] w-[140px] rounded-full p-[2px]`}
  >
    <div
      className={`${styles.flexCenter} h-full w-full flex-col rounded-full bg-primary text-[18px] font-medium leading-[23px]`}
    >
      <div className={`${styles.flexStart}`}>
        <div className="flex">
          <p className="text-gradient select-none font-medium">Get</p>
          <img
            src={arrowUp}
            alt="arrow"
            className="h-[23px] w-[23px] object-contain"
          />
        </div>
      </div>
      <div className="text-gradient select-none font-medium">Started</div>
    </div>
  </div>
);
