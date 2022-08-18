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
<<<<<<< HEAD
          <p className="font-poppins font-medium text-[1.125rem] leading-[1.4375rem] mr-2">
=======
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
>>>>>>> 49bccbe6dff6371944a929694d670e9410839ecf
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrowUp"
<<<<<<< HEAD
            className="w-[1.4375rem] h-[1.4375rem] object-contain "
          />
        </div>
        <p className="font-poppins font-medium text-[1.125rem] leading-[1.4375rem] ">
=======
            className="w-[23px] h-[23px] object-contain "
          />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px] ">
>>>>>>> 49bccbe6dff6371944a929694d670e9410839ecf
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};
