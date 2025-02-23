import styles from "./BotCard.module.css";
export default function BotCard({ bot, time, onClick, active }) {
  return (
    <div
      onClick={onClick}
      className={styles.botCardContainer + " " + (active ? styles.active : "")}
    >
      <img className={styles.img} src={bot.image} alt="Bot icon" />
      <div className={styles.type}>{bot.type}</div>
      {bot[time] > 0 ? (
        <div className={styles.plus}>{`+${bot[time]}%`}</div>
      ) : (
        <div className={styles.minus}>{`${bot[time]}%`}</div>
      )}
      {bot.name === "green_bot" && (
        <img
          className={styles.arrowGr}
          src="/src/assets/psd_exported_to_image_layers/layers/Bots/arrows/слой_17.png"
        />
      )}
      {bot.name === "red_bot" && (
        <img
          className={styles.arrowRed}
          src="/src/assets/psd_exported_to_image_layers/layers/Bots/arrows/слой_17_копия.png"
        />
      )}
      {bot.name === "orange_bot" && (
        <img
          className={styles.arrowOr}
          src="/src/assets/psd_exported_to_image_layers/layers/Bots/arrows/слой_16.png"
        />
      )}
      {bot.name === "blue_bot" && (
        <img
          className={styles.arrowBl}
          src="/src/assets/psd_exported_to_image_layers/layers/Bots/arrows/слой_16_копия.png"
        />
      )}
    </div>
  );
}
