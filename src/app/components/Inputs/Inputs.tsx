import styles from "./Inputs.module.css";

const Inputs = () => {
  return (
    <>
      <title>Input Library</title>
      <input type="text" className={`${styles.input} ${styles.inputDefault}`} value="Default"/>
      <input type="text" className={`${styles.input} ${styles.inputSuccess}`} value="Success"/>
      <input type="text" className={`${styles.input} ${styles.inputError}`} value="Error"/>
      <input type="text" className={`${styles.input} ${styles.inputLarge}`} value="Large"/>
      <input type="text" className={`${styles.input} ${styles.inputSmall}`} value="Small"/>
      <input type="text" className={styles.input} value="Disabled" disabled></input>
    </>
  );
}

export default Inputs;
