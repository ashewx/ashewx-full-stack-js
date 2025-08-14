import styles from "./pokeballspinner.module.css";

export default function PokeballSpinner() {
  return (
    <div className={styles["pokeball-container"]}>
      <div class={styles["pokeball"]}>
        <div class={styles["top-half"]}></div>
        <div class={styles["bottom-half"]}></div>
        <div class={styles["middle-line"]}></div>
        <div class={styles["button"]}></div>
      </div>
    </div>
  );
}