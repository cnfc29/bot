import styles from "./Menu.module.css";
import Dashboard from "@image/Tool_bar/1/1.png";
import Megabot from "@image/Tool_bar/2/2.png";
import BotMarket from "@image/Tool_bar/3/3.png";
import CoinPrices from "@image/Tool_bar/4/4.png";
import Profile from "@image/Tool_bar/5/5.png";
export function Menu() {
  const menuButtons = [
    {
      name: "Dashboard",
      icon: Dashboard,
    },
    {
      name: "Megabot",
      icon: Megabot,
    },
    {
      name: "Bot market",
      icon: BotMarket,
    },
    {
      name: "Coin prices",
      icon: CoinPrices,
    },
    {
      name: "Profile",
      icon: Profile,
    },
  ];
  return (
    <div className={styles.menuList}>
      {menuButtons.map((btn) => (
        <div key={btn.name} className={styles.menuButton}>
          <img className={styles.img} src={btn.icon} alt="Btn icon" />
          {btn.name === "Dashboard" ? (
            <div className={styles.text + " " + styles.active}>{btn.name}</div>
          ) : (
            <div className={styles.text}>{btn.name}</div>
          )}
          {btn.name === "Profile" && <div className={styles.num}>3</div>}
        </div>
      ))}
    </div>
  );
}
