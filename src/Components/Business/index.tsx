// imports
import { features } from "../../Constants";
import styles, { layout } from "../../Styles";
import { Button } from "../Button";

export const Business = () => {
  return (
    <section className={`${layout.section}`} id="features">
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          You do the business, <br className="sm:block hidden" /> we'll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          os credit cards on the market
        </p>
      </div>
    </section>
  );
};
