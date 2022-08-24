// imports
import { clients } from "../../Constants";
import styles from "../../Styles";

export const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter}`}>
        {clients.map((client) => (
          <div key={client.id}>
            <img
              src={client.logo}
              alt="client"
              className={`sm:w-[192px] w-[100px] object-contain`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
