import styles from "../../Styles";
import { discount, robot } from "../../assets";
import { GetStarted } from "../GetStarted";

export const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      {/* LEFT SIDE */}
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
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[4.25rem] text-[3.25rem] text-white ss:leading-[6.25rem] leading-[4.6875rem] w-full ">
          Payment Method.
        </h1>

        <p className={`${styles.paragraph} max-w-[29.375rem] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div>
        <img
          src={robot}
          alt="robot hand"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient " />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient " />
      </div>
    </section>
  );
};
