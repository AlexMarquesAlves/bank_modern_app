// imports
import { card } from "../../assets";
import styles, { layout } from "../../Styles";
import { Button } from "../Button";

export const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
          voluptate minus accusantium aperiam dicta repellat corrupti
          perspiciatis.
        </p>
      </div>
    </section>
  );
};
