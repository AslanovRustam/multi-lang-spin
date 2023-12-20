import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import s from "./app.module.css";
import girl from "./images/girl.png";
import { useTranslation, Trans } from "react-i18next";
function App() {
  const { t } = useTranslation();
  const locale = navigator.language;
  const data = [
    "ru-RU",
    "az-AZ",
    "en-US",
    "pt-BR",
    "pt-PT",
    "de-DE",
    "es-ES",
    "fr-FR",
    "ru-KZ",
    "kk-KZ",
    "tr-TR",
    "uz",
  ];

  const localeRU = locale === "ru-RU" || locale === "ru";
  const localeMoreText = locale === "ru-RU" || locale === "ru";
  const localefr = locale === "fr-FR" || locale === "fr";
  console.log("localeRU", localeRU);
  console.log("localeFR", localefr);
  return (
    <div className={s.section}>
      <Header />
      <Main Trans={Trans} t={t} localefr={localefr} />
      <img className={s.girl} src={girl} alt="art girl" />
      {localeRU && <Footer />}
    </div>
  );
}

export default App;
