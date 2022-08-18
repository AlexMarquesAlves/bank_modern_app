import styles from "../../Styles";
import { discount, robot } from "../../assets";
import { GetStarted } from "../GetStarted";

export const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-16`}
      >
        {/* DISCOUNT */}
        <div className="flex flex-row items-center py-[0.375rem] px-4 bg-discount-gradient rounded-[0.625rem] mb-2 ">
          <img src={discount} alt="Discount" className="w-[2rem] h-[2rem]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white ">20%</span> Discount For {` `}
            <span className="text-white ">1 Month</span> Account
          </p>
        </div>
        {/*  */}
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[4.5rem] text-[3.25rem] text-white ss:leading-[6.25rem] leading-[4.6875rem] ">
            The Next <br className="sm:block hidden" /> {` `}
            <span className="text-gradient">Generation</span> {` `}
            Payment Method.
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
      </div>
    </section>
  );
};
