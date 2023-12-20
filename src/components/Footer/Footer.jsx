import s from "./footer.module.css";
import pay1 from "../../images/pays/sbp.png";
import pay2 from "../../images/pays/alfa.png";
import pay3 from "../../images/pays/check.png";
import pay4 from "../../images/pays/plastrix.png";
import pay5 from "../../images/pays/mir.png";
import pay6 from "../../images/pays/visa.png";
import pay7 from "../../images/pays/mastercard.png";
import pay8 from "../../images/pays/tether.png";
import pay9 from "../../images/pays/tinkof.png";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <ul className={s.list}>
        <li className={s.item}>
          <img className={s.icon} src={pay1} alt="pay" />
        </li>
        <li className={s.item}>
          <img className={s.icon} src={pay2} alt="pay" />
        </li>
        <li className={s.item}>
          <img className={s.icon} src={pay3} alt="pay" />
        </li>
        <li className={s.item}>
          <img className={s.icon} src={pay4} alt="pay" />
        </li>
        <li className={s.item}>
          <img className={s.icon} src={pay5} alt="pay" />
        </li>
        <li className={s.item}>
          <img className={s.icon} src={pay6} alt="pay" />
        </li>
        <li className={s.item}>
          <img className={s.icon} src={pay7} alt="pay" />
        </li>
        <li className={s.item}>
          <img className={s.icon} src={pay8} alt="pay" />
        </li>
        <li className={s.item}>
          <img className={s.icon} src={pay9} alt="pay" />
        </li>
      </ul>
    </footer>
  );
}
