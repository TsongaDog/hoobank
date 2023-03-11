import { clients } from "../constants/constants.js";
import styles from "../style.js";

export const Testimonials = () => (
  <div
    className={`${styles.padding} grid grid-cols-1 flex-wrap items-center justify-center gap-[50px] ss:grid-cols-2 md:grid-cols-4 md:gap-[100px]`}
  >
    {clients.map((client) => {
      return (
        <img
          src={client.logo}
          alt="Client Logo"
          className={`max-h-[50px] max-w-[180px] place-self-center object-contain ${
            client.id === "client-3" ? "pb-[10px]" : ""
          }`}
          key={client.id}
        />
      );
    })}
  </div>
);
