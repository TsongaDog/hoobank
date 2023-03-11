import { Button } from "./Button";
import styles from "../style.js";

export const CTA = () => (
  <section className="py-8 sm:py-12">
    <div className="bg-black-gradient-2 flex flex-col place-content-center items-center justify-between gap-[60px] rounded-2xl px-[37px] py-[26px] ss:px-[57px] ss:py-[46px] md:flex-row md:px-[97px] md:py-[76px]">
      <div className="flex w-3/4 flex-col gap-[35px] text-center md:text-start">
        <h2 className={`${styles.heading2}`}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph}`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex w-1/4 justify-center md:justify-end">
        <Button />
      </div>
    </div>
  </section>
);
