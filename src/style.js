const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2:
    "font-semibold sm:text-[46px] text-[36px] text-white xs:leading-[160%] w-full text-center md:text-start",
  heading6:
    "text-white capitalize font-semibold leading-[130%] tracking-[0.01em] text-[22px] md:text-[18px]",
  paragraph:
    "text-[14px] ss:text-[18px] leading-[30.8px] text-center md:text-start inline-flex",
  subtitle:
    "max-w-[380px] text-[18px] md:text-[16px] text-center ss:text-start ",

  statsValue:
    "font-semibold text-[36px] xs:text-[52px] md:text-[40px] text-white leading-[130%] text-center",
  statsTitle:
    "text-gradient text-[22px] xs:text-[26px] leading-[130%] uppercase text-center whitespace-nowrap ",

  feedbackContent: "text-[18px] leading-[180%] tracking-[0.02em] text-white",
  feedbackName: "text-[20px] leading-[160%] text-white",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-around items-start",

  paddingHead: "sm:px-24 px-12",
  paddingX: "sm:px-16 ss:px-12d px-4",
  paddingY: "sm:py-16 py-10",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col items-center ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse items-center ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} relative max-h-[455px] max-w-[530px]`,
  sectionImg: `flex-1 flex ${styles.flexCenter} relative`,

  sectionInfo: `flex flex-col justify-center md:justify-around items-center md:items-start flex-1 ss:w-[88%] w-full gap-8 md:gap-10`,
};

export default styles;
