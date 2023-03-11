import { discount } from "../../assets/index.js";
import styles from "../../style.js";
import { GetStarted } from "./GetStarted.jsx";
import { HeroImage } from "./HeroImage.jsx";

export const Hero = ({ isOpen }) => (
  <section
    id="Hero"
    className={`relative flex flex-col  md:flex-row ${
      styles.paddingY
    } px-4 xs:px-12 sm:px-16 md:px-0 md:pl-16 ${
      isOpen ? `mt-[260px]` : `mt-[0]`
    }`}
  >
    <div
      className={`grid justify-start space-y-8 md:flex md:flex-col md:justify-center`}
    >
      <div
        className={`bg-discount-gradient mb-2 inline-flex flex-wrap space-x-1 rounded-[10px] py-[6px] px-4 text-[18px] leading-[30.8px]`}
      >
        <img src={discount} alt="discount" className="h-8 w-8" />
        <span className="text-white">20% </span>
        <span> DISCOUNT FOR </span>
        <span className="text-white"> 1 MONTH </span>
        <span> ACCOUNT</span>
      </div>
      <div className="md:[64px] text-[48px] font-bold leading-[140%] text-white ss:text-[56px]">
        <div className="flex items-center space-x-16">
          <div className="flex flex-row flex-wrap ss:flex-col">
            <div className="whitespace-nowrap">The Next </div>
            <div className="text-gradient mr-8"> Generation</div>
          </div>
          <div className="hidden cursor-pointer ss:block">
            <GetStarted />
          </div>
        </div>
        <div> Payment Method.</div>
      </div>
      <div className={`${styles.paragraph} max-w-[500px]`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </div>

      <div className={`${styles.flexCenter} block cursor-pointer ss:hidden`}>
        <GetStarted />
      </div>
    </div>
    <div className="hidden md:block">
      <HeroImage />
    </div>
    <div className="white__gradient absolute left-[-20px] top-[35%] z-[0] h-[300px] w-[155px]" />
  </section>
);
