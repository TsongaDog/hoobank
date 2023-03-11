import styles from "./style";
import {
  Hero,
  CTA,
  Feedback,
  Billing,
  Card,
  Navbar,
  Footer,
  Stats,
  Business,
  Testimonials,
} from "./components/index.js";
import { useState } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full overflow-hidden bg-primary font-poppins text-dimWhite">
      <div className={`${styles.flexCenter}`}>
        <div
          className={`${styles.boxWidth} overflow-visible bg-primary xxl:overflow-hidden`}
        >
          <header>
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
          </header>
          <main>
            <Hero isOpen={isOpen} />
            <div className={styles.paddingX}>
              <Stats />
              <Business />
              <Billing />
              <Card />
              <Feedback />
              <Testimonials />
              <CTA />
            </div>
          </main>
          <footer className={styles.paddingX}>
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
};

export default App;
