import styles from "./TimeButton.module.css";
export function TimeButton({ children, onClick, active }) {
  return (
    <div
      className={styles.timeButton + " " + (active ? styles.active : "")}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
