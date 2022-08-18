import styles from "../../Styles";
import { arrowUp } from "../../assets";

export const GetStarted = () => {
  return (
    // bg gradient
    <div>
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
