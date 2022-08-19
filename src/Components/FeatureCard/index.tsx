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
        <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
      </div>
    </div>
  );
};
