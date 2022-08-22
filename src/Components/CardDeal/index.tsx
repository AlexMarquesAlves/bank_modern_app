// imports
import { card } from "../../assets";
import styles, { layout } from "../../Styles";
import { Button } from "../Button";

export const CardDeal = () => {
  return (
    <section className={layout.section}>
      {/* Information */}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
          voluptate minus accusantium aperiam dicta repellat corrupti
          perspiciatis.
        </p>

        <Button styles="mt-10" />
      </div>

      <div className={layout.sectionImg}></div>
    </section>
  );
};
