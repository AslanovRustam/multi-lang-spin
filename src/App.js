import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import s from "./app.module.css";
import girl from "./images/girl.png";
import { useTranslation, Trans } from "react-i18next";
function App() {
  const { t } = useTranslation();
  const locale = navigator.language;
  const localefr = locale === "fr-FR" || locale === "fr";

  return (
    <div className={s.section}>
      <Header />
      <Main Trans={Trans} t={t} localefr={localefr} />
      <img className={s.girl} src={girl} alt="art girl" />
    </div>
  );
}

export default App;
