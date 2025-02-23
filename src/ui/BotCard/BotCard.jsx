import styles from "./BotCard.module.css";
import greenArrow from "@image/Bots/arrows/слой_17.png";
import redArrow from "@image/Bots/arrows/слой_17_копия.png";
import orangeArrow from "@image/Bots/arrows/слой_16.png";
import blueArrow from "@image/Bots/arrows/слой_16_копия.png";

import orangeBotIcon from "@image/Bots/6.png";
import whiteBotIcon from "@image/Bots/5.png";
import blueBotIcon from "@image/Bots/4.png";
import greenBotIcon from "@image/Bots/1.png";
import yellowBotIcon from "@image/Bots/2.png";
import redBotIcon from "@image/Bots/3.png";

const botIcons = {
  orange_bot: orangeBotIcon,
  white_bot: whiteBotIcon,
  blue_bot: blueBotIcon,
  green_bot: greenBotIcon,
  yellow_bot: yellowBotIcon,
  red_bot: redBotIcon,
};

export default function BotCard({ bot, time, onClick, active }) {
  const botIcon = botIcons[bot.name];

  return (
    <div
      onClick={onClick}
      className={styles.botCardContainer + " " + (active ? styles.active : "")}
    >
      <img className={styles.img} src={botIcon} alt="Bot icon" />
      <div className={styles.type}>{bot.type}</div>
      {bot[time] > 0 ? (
        <div className={styles.plus}>{`+${bot[time]}%`}</div>
      ) : (
        <div className={styles.minus}>{`${bot[time]}%`}</div>
      )}
      {bot.name === "green_bot" && (
        <img className={styles.arrowGr} src={greenArrow} />
      )}
      {bot.name === "red_bot" && (
        <img className={styles.arrowRed} src={redArrow} />
      )}
      {bot.name === "orange_bot" && (
        <img className={styles.arrowOr} src={orangeArrow} />
      )}
      {bot.name === "blue_bot" && (
        <img className={styles.arrowBl} src={blueArrow} />
      )}
    </div>
  );
}
