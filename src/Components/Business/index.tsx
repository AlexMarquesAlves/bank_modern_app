import { features } from "../../Constants";
import styles, { layout } from "../../Styles";
import { Button } from "../Button";
import { FeatureCard } from "../FeatureCard";

export const Business = () => {
  return (
    <section className={`${layout.section}`} id="features">
      {/* LEFT SIDE */}
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          You do the business, <br className="sm:block hidden" /> we'll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[29.375rem] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          os credit cards on the market
        </p>

        <Button styles="mt-10" />
      </div>

      {/* RIGHT SIDE */}
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};
