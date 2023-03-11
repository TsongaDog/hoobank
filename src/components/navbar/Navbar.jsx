import { RouterComp } from "./RouterComp.jsx";
import { RouterMob } from "./RouterMob.jsx";
import styles from "../../style.js";

import { close, logo, menu } from "../../assets/index.js";

export const Navbar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div
        className={`flex min-h-[70px] items-center justify-between text-dimWhite ${styles.paddingHead}`}
      >
        <img className="mt-[-5px] h-[32px] w-[128px]" src={logo} alt="Logo" />

        <div className="flex items-center justify-between">
          <RouterComp />
          <RouterMob isOpen={isOpen} />
          <img
            src={isOpen ? `${close}` : `${menu}`}
            className="block h-[24px] w-[24px] ss:hidden"
            onClick={() => setIsOpen((prevOpen) => !prevOpen)}
            alt="Menu"
          />
        </div>
      </div>
    </>
  );
};
