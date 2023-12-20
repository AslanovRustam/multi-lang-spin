import { useEffect, useState } from "react";
import Slots2Spin from "../Slots/Slots2Spin";
import WiningSet from "../WiningSet/WiningSet";
import s from "./main.module.css";

export default function Main({ Trans, t, localefr }) {
  const [winingArr, setWiningArr] = useState([]);
  const [isUserActive, setIsUserActive] = useState(false);

  useEffect(() => {
    const userFromLocalStorage = localStorage.getItem("userDaddy");
    if (userFromLocalStorage) {
      setIsUserActive(true);
      // window.location.replace("https://www.google.com/");
    }
  }, [isUserActive]);

  return (
    <main className={s.main}>
      <h1 className={s.title} data-text={t("header.text_1")}>
        {t("header.text_1")}
      </h1>
      <p className={s.subTitle}>{t("header.text_2")}</p>
      <Slots2Spin
        winingArr={winingArr}
        setWiningArr={setWiningArr}
        setIsUserActive={setIsUserActive}
        t={t}
        Trans={Trans}
        localefr={localefr}
      />
      <WiningSet winingArr={winingArr} Trans={Trans} t={t} />
    </main>
  );
}
