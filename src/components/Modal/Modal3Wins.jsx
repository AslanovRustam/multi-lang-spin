import { createPortal } from "react-dom";
import { useEffect } from "react";
import s from "./modal.module.css";
import popUp from "../../images/popUpDeposit.png";

const modalRoot = document.querySelector("#modal");

export default function Modal3Wins({
  showModal,
  winingArr,
  setIsUserActive,
  t,
  Trans,
  localefr,
}) {
  useEffect(() => {
    document.body.classList.add(s.overvlow);
    const changeLink = () => {
      const link = document.getElementById("link");
      link.href = link.href + window.location.search;
    };
    changeLink();

    return () => {
      document.body.classList.remove(s.overvlow);
    };
  }, []);

  const userIsActive = () => {
    localStorage.setItem("userDaddy", true);
    setIsUserActive(true);
  };

  const renderBonus = (data) => {
    if (data === 1) {
      return (
        <div key={data}>
          <p className={s.bonusValue}>150</p>
          <p className={s.bonusDescription}>{t("modal.freespin")}</p>
        </div>
      );
    }
    if (data === 2) {
      return (
        <div key={data}>
          <p className={s.bonusValue}>375%</p>
          <p className={s.bonusDescription}>{t("modal.bonuses")}</p>
        </div>
      );
    }
  };
  console.log("localeFR", localefr);
  return createPortal(
    <div className={`${s.modalBackDrop} ${showModal ? s.show : ""}`}>
      <div className={s.container}>
        <img className={s.popUp} src={popUp} alt="popup bg" />
        <div className={s.description}>
          <p className={s.text}>{t("modal.title")}:</p>
          <div className={s.bonus}>
            {winingArr.map((item) => renderBonus(item))}
          </div>
        </div>
        <a
          className={`${s.button} ${localefr && s.buttonPaddingLoss}`}
          id="link"
          href="#"
          onClick={() => userIsActive()}
        >
          <Trans i18nKey="modal.button" />
        </a>
      </div>
    </div>,
    modalRoot
  );
}
// console.log(
//   "qwe",
//   (document.getElementById("root").innerHTML = window.location.href)
// );
// console.log(
//   "qwe2222",
//   (document.getElementById("root").innerHTML = window.location.search)
// );
