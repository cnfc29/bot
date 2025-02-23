import { useEffect, useState } from "react";
import styles from "./Chart.module.css";

export function Chart({ selectedBot }) {
  const days = ["22.04", "23.04", "24.04", "25.04", "26.04"];
  const points = [
    { top: "20%", left: "50%" },
    { top: "2%", left: "83.5%" },
    { top: "1.5%", left: "21.5%" },
    { top: "31.5%", left: "72.5%" },
    { top: "28%", left: "94.5%" },
    { top: "26%", left: "32%" },
    { top: "13%", left: "42.5%" },
  ];
  const [percent, setPercent] = useState((Math.random() * 100).toFixed(1));
  const [pointPosition, setPointPosition] = useState(points[0]);

  useEffect(() => {
    setPercent((Math.random() * 100).toFixed(1));

    const randomIndex = Math.floor(Math.random() * points.length);
    setPointPosition(points[randomIndex]);
  }, [selectedBot]);

  return (
    <>
      <div className={styles.chartContainer}>
        <div className={styles.chart}></div>
        <div className={styles.innerContainer}></div>
        <div className={styles.line}></div>
        <div
          className={styles.point}
          style={{ top: pointPosition.top, left: pointPosition.left }}
        ></div>
        <div className={styles.percent}>+{percent}%</div>
      </div>
      <div className={styles.dataList}>
        {days.map((day) => (
          <div key={day} className={styles.dataItem}>
            {day}
          </div>
        ))}
      </div>
    </>
  );
}
