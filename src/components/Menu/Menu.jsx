import styles from "./Menu.module.css";
export function Menu() {
  const menuButtons = [
    {
      name: "Dashboard",
      icon: "/src/assets/psd_exported_to_image_layers/layers/Tool_bar/1/1.png",
    },
    {
      name: "Megabot",
      icon: "/src/assets/psd_exported_to_image_layers/layers/Tool_bar/2/2.png",
    },
    {
      name: "Bot market",
      icon: "/src/assets/psd_exported_to_image_layers/layers/Tool_bar/3/3.png",
    },
    {
      name: "Coin prices",
      icon: "/src/assets/psd_exported_to_image_layers/layers/Tool_bar/4/4.png",
    },
    {
      name: "Ptofile",
      icon: "/src/assets/psd_exported_to_image_layers/layers/Tool_bar/5/5.png",
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
          {btn.name === "Ptofile" && <div className={styles.num}>3</div>}
        </div>
      ))}
    </div>
  );
}
