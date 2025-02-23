import styles from "./Price.module.css";
import data from "../../../data.min.json";
import priceIcon from "@image/balance/слой_18.png";

export function Price() {
  return (
    <div className={styles.container}>
      <span className={styles.text}>TRADING CAPITAL</span>
      <div className={styles.priceContainer}>
        <span className={styles.price}>
          {data.trading_capital +
            " " +
            data.trading_capital_currency.toUpperCase()}
        </span>
        <div className={styles.balanceContainer}>
          <div className={styles.text + " " + styles.priceItem}>
            <span>
              BALANCE:{" "}
              <span className={styles.textBalance}>{data.balance}</span>
            </span>
            <img className={styles.img} src={priceIcon} alt="Price icon" />
          </div>
          <div className={styles.text + " " + styles.priceItem}>
            <span>
              ON HOLD:{" "}
              <span className={styles.textBalance}>{data.on_hold}</span>
            </span>
            <img className={styles.img} src={priceIcon} alt="Price icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
