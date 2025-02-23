import BotCard from "../../ui/BotCard/BotCard";
import styles from "./BotsList.module.css";
import data from "../../../data.min.json";
export function BotsList({ time, selectedBot, setSelectedBot }) {
  return (
    <div className={styles.botsListContainer}>
      {data.bots.map((bot) => (
        <BotCard
          key={bot.name}
          bot={bot}
          onClick={() => setSelectedBot(bot.name)}
          active={selectedBot === bot.name}
          time={time}
        />
      ))}
    </div>
  );
}
