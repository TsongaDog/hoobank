import { quotes, people01, people02, people03, bill } from "../assets/index.js";
import { feedback } from "../constants/constants.js";
import styles from "../style.js";

export const Feedback = () => {
  return (
    <section
      id="Clients"
      className={`${styles.paddingY} relative flex flex-col gap-8 md:gap-12`}
    >
      <div className="flex flex-col items-center justify-between gap-[40px] md:flex-row md:gap-20">
        <h2 className={`${styles.heading2} max-w-[600px]`}>
          What people are saying about us
        </h2>
        <div className={"w-[700px] text-center"}>
          <p className={`${styles.paragraph} max-w-[440px]`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      <div className="relative grid grid-cols-1 justify-center gap-[30px] sm:grid-cols-2 md:grid-cols-3">
        {feedback.map((quote) => {
          return (
            <div
              className="feedback-card flex w-3/4 min-w-[303px] flex-1 justify-self-center sm:w-full"
              key={quote.id}
            >
              <div className="flex min-h-full flex-col p-6 md:p-10">
                <div className="h-12 w-12">
                  <img
                    src={quotes}
                    alt="Quote Image"
                    className="h-full w-full"
                  />
                </div>
                <div className="mt-[51px] mb-[30px] flex flex-1">
                  <p className={`${styles.feedbackContent}`}>{quote.content}</p>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src={quote.img}
                    alt="Person Image"
                    className="h-12 w-12"
                  />
                  <div>
                    <p className={`${styles.feedbackName}`}>{quote.name}</p>
                    <p>{quote.title}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div>
          <div className="blue__gradient-2 absolute -right-1/2 top-0 z-[2] z-[3] h-[50%] w-[50%] rounded-full" />
          <div className="pink__gradient absolute -right-1/2 bottom-0 z-[0] h-[50%] w-[50%] rounded-full" />
        </div>
      </div>
    </section>
  );
};
