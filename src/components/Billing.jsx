import { layout } from "../style.js";
import { bill, google, apple } from "../assets/index.js";
import styles from "../style.js";

export const Billing = () => {
  return (
    <section
      id="Product"
      className={`${layout.sectionReverse} gap-[60px] md:gap-[100px]`}
    >
      <div className={`${layout.sectionImgReverse}`}>
        <img src={bill} alt="bill" />
        <div className="white__gradient absolute -left-1/2 top-0 z-[3] h-[50%] w-[50%] rounded-full" />
        <div className="pink__gradient absolute -left-1/2 bottom-0 z-[0] h-[50%] w-[50%] rounded-full" />
      </div>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Easily control your billing & invoicing.
        </h2>
        <p className={`${styles.paragraph}`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className={`flex gap-[33px]`}>
          <button>
            <a href="https://www.apple.com/app-store/" target="_blank">
              <img src={apple} alt="apple" className="h-[62px] w-[208px]" />
            </a>
          </button>
          <button>
            <a href="https://play.google.com/store/games" target="_blank">
              <img src={google} alt="google" className="h-[62px] w-[208px]" />
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};
