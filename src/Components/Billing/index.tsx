import { apple, bill, google } from "../../assets";
import styles, { layout } from "../../Styles";

export const Billing = () => {
  return (
    <section id={"product"} className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        {/* Image */}
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
      </div>
    </section>
  );
};
