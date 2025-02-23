import { TimeButton } from "../../ui/TimeButton/TimeButton";
import styles from "./TimeContainer.module.css";
export function TimeContainer({ time, setTime }) {
  const allowedTimes = [
    { name: "24h", btn: "24h" },
    { name: "7d", btn: "7 days" },
    { name: "30d", btn: "30 days" },
    { name: "all_time", btn: "All time" },
  ];

  return (
    <div className={styles.timeContainer}>
      <div className={styles.text}>Time Range:</div>
      <div className={styles.buttonsList}>
        {allowedTimes.map((times) => (
          <TimeButton
            key={times.name}
            active={time === times.name}
            onClick={() => setTime(times.name)}
          >
            {times.btn}
          </TimeButton>
        ))}
      </div>
    </div>
  );
}
