import { features } from "../../Constants";

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
    <div>
      <div>
        <img src={icon} alt="icon" />
      </div>
    </div>
  );
};
