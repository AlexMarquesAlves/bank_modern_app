import { features } from "../../Constants";
import styles from "../../Styles";

export type IFeatureCardProps = {
  index: number;
  content: string;
  title: string;
  icon: string;
};

export const FeatureCard = ({
  index,
  content,
  title,
  icon,
}: IFeatureCardProps) => {
  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
    >
      {/* Icons */}
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
      </div>

      <div className="flex flex-1 flex-col ml-3">
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
};
