// imports
import styles from "../../Styles";
import { Button } from "../Button";

export const CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className={`flex-1 flex flex-col`}>
        <h2 className={``}>Let's try our service now!</h2>
        <p className={``}>
          Everything you need to accept card payments and grow your business
          anywhere on planet.
        </p>
      </div>

      <div className={``}>
        <Button styles={``} />
      </div>
    </section>
  );
};
