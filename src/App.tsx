import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "./Components";
import styles from "./Styles";

export const App = () => {
  return (
    <div className="bg-black w-full overflow-hidden">
      {/* Navbar Section */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      {/* Hero Section */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      {/*  Sections */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <Stats /> */}
          {/* <Business /> */}
          {/* <Billing /> */}
          {/* <CardDeal /> */}
          {/* <Testimonials /> */}
          {/* <Clients /> */}
          {/* <CTA /> */}
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
};
