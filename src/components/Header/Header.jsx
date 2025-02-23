import styles from "./Header.module.css";
import burgerMenuImg from "@image/Title_bar/menu_icon.png";
import refreshImg from "@image/Title_bar/refresh.png";
export function Header() {
  return (
    <div className={styles.headerContainer}>
      <img className={styles.img} src={burgerMenuImg} alt="Menu Icon" />
      <div>Dashboard</div>
      <img className={styles.img} src={refreshImg} alt="Refresh Icon" />
    </div>
  );
}
