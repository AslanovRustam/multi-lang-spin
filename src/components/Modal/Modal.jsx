import { createPortal } from "react-dom";
import { useEffect } from "react";
import s from "./modal.module.css";
import stars from "../../images/stars.png";
import lose from "../../images/loss.png";
import popUp from "../../images/popUp.png";
import { ReactComponent as Close } from "../../images/close.svg";

const modalRoot = document.querySelector("#modal");

export default function Modal({
  onClose,
  count,
  showModal,
  togleModal,
  setShowModal,
}) {
  useEffect(() => {
    document.body.classList.add(s.overvlow);
    return () => {
      document.body.classList.remove(s.overvlow);
    };
  }, []);

  const CloseAndSpin = () => {
    setShowModal(false);
    // togleModal();
    onClose();
  };

  const win = count === 1 || count === 2 || count === 3;
  const loseCount = count === 8 || count === 5;

  return createPortal(
    <div className={`${s.modalBackDrop} ${showModal ? s.show : ""}`}>
      <div className={s.container}>
        <img className={s.popUp} src={popUp} alt="popup bg" />
        <Close className={s.icon} onClick={() => togleModal()} />
        <img
          className={`${!win ? s.hideStars : s.stars}`}
          src={stars}
          alt="stars"
        />
        <div className={s.description}>
          {count === 3 && (
            <>
              <p className={s.text}>Вы выиграли:</p>
              <p className={s.bonusCount}>50</p>
              <p className={s.bonusText}>фриспинов</p>
            </>
          )}
          {count === 1 && (
            <>
              <p className={s.text}>Вы выиграли:</p>
              <p className={s.bonusCount}>100</p>
              <p className={s.bonusText}>фриспинов</p>
            </>
          )}
          {loseCount && (
            <>
              <img className={s.lose} src={lose} alt="cross" />
              <p className={s.bonusText}>
                попробуй <br></br> еще
              </p>
            </>
          )}
          {count === 2 && (
            <>
              <p className={s.text}>Вы выиграли:</p>
              <p className={s.bonusCount}>375%</p>
              <p className={s.bonusText}>
                Бонуса <br></br> на депозит
              </p>
            </>
          )}
        </div>
        {!win ? (
          <div className={s.button} onClick={() => CloseAndSpin()}>
            КРУТИТЬ
          </div>
        ) : (
          <a
            className={s.button}
            href="https://www.google.com/"
            target="_blank"
          >
            ПОЛУЧИТЬ
          </a>
        )}
      </div>
    </div>,
    modalRoot
  );
}

/* <a
          className={s.button}
          onClick={!win ? () => CloseAndSpin() : () => console.log("you won")}
          href={win ? "https://www.google.com/" : "#"}
        >
          {win ? "ПОЛУЧИТЬ" : "КРУТИТЬ"}
        </a> */
