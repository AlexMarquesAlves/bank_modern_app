import styles from "../../Styles";
import { arrowUp } from "../../assets";

export const GetStarted = () => {
  return (
    // bg gradient
    <div
      className={`${styles.flexCenter} w-[8.75rem] h-[8.75rem] rounded-full bg-blue-gradient p-[2px] cursor-pointer `}
    >
      {/* bg black */}
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full `}
      >
        <div className={`${styles.flexStart} flex-row `}>
          <p className="font-poppins font-medium text-[1.125rem] leading-[1.4375rem] mr-2">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrowUp"
            className="w-[1.4375rem] h-[1.4375rem] object-contain "
          />
        </div>
        <p className="font-poppins font-medium text-[1.125rem] leading-[1.4375rem] ">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};
