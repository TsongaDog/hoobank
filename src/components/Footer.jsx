import styles from "../style.js";
import { logo, copyright } from "../assets/index.js";
import { footerLinks } from "../constants/constants.js";
import { socialMedia } from "../constants/constants.js";

export const Footer = () => (
  <div className={`flex flex-col ${styles.paddingY}`}>
    <div className="flex flex-col items-center justify-between gap-12 py-5 sm:flex-row sm:py-8 md:gap-[100px]">
      <div className="flex w-full flex-col items-center gap-10 ss:w-[20%]">
        <img src={logo} alt="Logo" className="max-h-[72px] max-w-[242px]" />
        <p className="text-center text-[18px] leading-[178%]">
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
      <div className="grid w-[80%] grid-cols-1 justify-end gap-10 sm:grid-cols-3 sm:flex-row sm:gap-0">
        {footerLinks.map((footerLink) => {
          return (
            <div
              key={footerLink.id}
              className="flex flex-col gap-10 text-center sm:text-start"
            >
              <h6 className={styles.heading6}>{footerLink.title}</h6>
              <div className="flex flex-col gap-4">
                {footerLink.links.map((link) => {
                  return (
                    <p key={link.id}>
                      <a href={link.link} target="_blank">
                        {link.name}
                      </a>
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
    <div
      className={`flex flex-col-reverse items-center justify-between gap-6 border-t-[1px] py-5 ss:flex-row sm:py-8`}
    >
      <div className="flex flex-col items-center gap-[15px] xs:flex-row">
        <div className="flex flex-row justify-center gap-[15px]">
          <p className="font-abel text-[18px] leading-[150%]">Copyright</p>
          <img src={copyright} alt="copyright" />
        </div>
        <p className="text-center font-[18px] leading-[150%]">
          2021 HooBank. All Rights Reserved.
        </p>
      </div>
      <div className="flex flex-row gap-[30px]">
        {socialMedia.map((image) => {
          return (
            <a href={image.link} key={image.id} target="_blank">
              <img
                src={image.icon}
                alt={`${image.id}`}
                className="h-[21px] w-[21px]"
              />
            </a>
          );
        })}
      </div>
    </div>
  </div>
);
