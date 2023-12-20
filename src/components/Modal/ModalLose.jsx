import { createPortal } from "react-dom";
import { useEffect } from "react";
import s from "./modal.module.css";
import stars from "../../images/stars.png";
import lose from "../../images/loss.png";
import popUp from "../../images/popUp.png";
import { ReactComponent as Close } from "../../images/close.svg";

const modalRoot = document.querySelector("#modal");

export default function ModalLose({ onClose, showModal, togleModal }) {
  useEffect(() => {
    document.body.classList.add(s.overvlow);
    return () => {
      document.body.classList.remove(s.overvlow);
    };
  }, []);

  const CloseAndSpin = () => {
    togleModal();
    onClose();
  };

  return createPortal(
    <div className={`${s.modalBackDrop} ${showModal ? s.show : s.hide}`}>
      <div className={s.container}>
        <img className={s.popUp} src={popUp} alt="popup bg" />
        <Close className={s.icon} onClick={() => togleModal()} />
        <img className={s.hideStars} src={stars} alt="stars" />
        <div className={s.description}>
          <>
            <img className={s.lose} src={lose} alt="cross" />
            <p className={s.bonusText}>
              попробуй <br></br> еще
            </p>
          </>
        </div>
        <div className={s.button} onClick={() => CloseAndSpin()}>
          КРУТИТЬ
        </div>
      </div>
    </div>,
    modalRoot
  );
}
