import { quotes } from "../../assets";

export const FeedbackCard = ({ content, name, title }: FeedbackCardProps) => {
  return (
    <div
      className={`flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr- my5 feedback-card`}
    >
      <img
        src={quotes}
        alt="double_quotes"
        className={`w-[42px] h-[27px] object-contain`}
      />
      <p
        className={`font-poppins font-normal text-[18px] leading-[32px] text white my-10`}
      >
        {content}
      </p>
    </div>
  );
};
