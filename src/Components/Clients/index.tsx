// imports
import { clients } from "../../Constants";
import styles from "../../Styles";

export const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter}`}>
        {clients.map((client) => (
          <div key={client.id}></div>
        ))}
      </div>
    </section>
  );
};
