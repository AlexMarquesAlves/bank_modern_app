import styles from "../../Styles";
import { arrowUp } from "../../assets";

export const GetStarted = () => {
  return (
    // bg gradient
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer `}
    >
      {/* bg black */}
      <div>
        <div>
          <p>
            <span>Get</span>
          </p>
          <img src={arrowUp} alt="arrowUp" />
        </div>
        <p>
          <span>Started</span>
        </p>
      </div>
    </div>
  );
};
