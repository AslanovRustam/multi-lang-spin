import { createPortal } from "react-dom";
import { useEffect } from "react";
import s from "./modal.module.css";
import stars from "../../images/stars.png";
import popUp from "../../images/popUp.png";
import { ReactComponent as Close } from "../../images/close.svg";

const modalRoot = document.querySelector("#modal");

export default function ModalWin({ count, showModal, togleModal }) {
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

  return createPortal(
    <div className={`${s.modalBackDrop} ${showModal ? s.show : s.hide}`}>
      <div className={s.container}>
        <img className={s.popUp} src={popUp} alt="popup bg" />
        <Close className={s.icon} onClick={() => togleModal()} />
        <img className={s.stars} src={stars} alt="stars" />
        <div className={s.description}>
          {count === 3 && (
            <>
              <p className={s.text}>Вы выиграли:</p>
              <p className={s.bonusCount} data-text="50">
                50
              </p>
              <p className={s.bonusText} data-text="фриспинов">
                фриспинов
              </p>
            </>
          )}
          {count === 1 && (
            <>
              <p className={s.text}>Вы выиграли:</p>
              <p className={s.bonusCount} data-text="100">
                100
              </p>
              <p className={s.bonusText} data-text="фриспинов">
                фриспинов
              </p>
            </>
          )}

          {count === 2 && (
            <>
              <p className={s.text}>Вы выиграли:</p>
              <p className={s.bonusCount} data-text="375%">
                375%
              </p>
              <p className={s.bonusText} data-text="Бонуса на депозит">
                Бонуса <br></br> на депозит
              </p>
            </>
          )}
        </div>
        <a
          className={s.button}
          id="link"
          href="https://www.google.com/"
          // target="_blank"
        >
          ПОЛУЧИТЬ
        </a>
      </div>
    </div>,
    modalRoot
  );
}
