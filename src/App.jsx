import { useEffect, useState } from "react";
import "./App.css";
import { BotsList } from "./components/BotsList/BotsList";
import { Chart } from "./components/Chart/Chart.JSX";
import { Header } from "./components/Header/Header";
import { Price } from "./components/Price/Price";
import { TimeContainer } from "./components/TimeContainer/TimeContainer";
import { Menu } from "./components/Menu/Menu";

function App() {
  const [time, setTime] = useState(
    localStorage.getItem("selectedTime") || "24h"
  );
  const [selectedBot, setSelectedBot] = useState(
    localStorage.getItem("selectedBot") || "orange_bot"
  );

  useEffect(() => {
    localStorage.setItem("selectedTime", time);
  }, [time]);

  useEffect(() => {
    localStorage.setItem("selectedBot", selectedBot);
  }, [selectedBot]);

  return (
    <>
      <Header />
      <Price />
      <Chart selectedBot={selectedBot} />
      <BotsList
        time={time}
        selectedBot={selectedBot}
        setSelectedBot={setSelectedBot}
      />
      <TimeContainer time={time} setTime={setTime} />
      <Menu />
    </>
  );
}

export default App;
