import s from "./header.module.css";
import logoSvg from "../../images/logo.svg";

export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.logoContainer}>
        {/* <img className={s.logo} src={logoSvg} alt="gamma logo" /> */}
      </div>
    </header>
  );
}
