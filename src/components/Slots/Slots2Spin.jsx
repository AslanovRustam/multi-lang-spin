import { useState } from "react";
import s from "./slots.module.css";
import slot1 from "../../images/slot1.png";
import slot2 from "../../images/slot2.png";
import slot3 from "../../images/slot3.png";
import Modal3Wins from "../Modal/Modal3Wins";

export default function Slots2Spin({
  winingArr,
  setWiningArr,
  setIsUserActive,
  t,
  Trans,
  localefr,
}) {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleButtonClick = () => {
    if (isButtonDisabled) {
      return;
    }
    setIsButtonDisabled(true);

    setCount(count + 1);
    setWiningArr([...winingArr, count + 1]);
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 3500);

    if (count === 1) {
      setTimeout(() => setShowModal(true), 4000);
    }
  };

  function togleModal() {
    return setShowModal(!showModal);
  }

  return (
    <>
      <div className={s.container}>
        <div className={s.slots}>
          <div className={s.slotItem}>
            <img
              className={`${s.slot} ${count === 2 && s.item_1_spin_1} ${
                count === 1 && s.item_1_spin_2
              }`}
              src={slot1}
              alt="slot"
            />
          </div>
          <div className={s.slotItem}>
            <img
              className={`${s.slot} ${count === 2 && s.item_2_spin_1} ${
                count === 1 && s.item_2_spin_2
              } `}
              src={slot2}
              alt="slot"
            />
          </div>
          <div className={s.slotItem}>
            <img
              className={`${s.slot} ${count === 2 && s.item_3_spin_1} ${
                count === 1 && s.item_3_spin_2
              }`}
              src={slot3}
              alt="slot"
            />
          </div>
        </div>
        <div className={s.button} onClick={handleButtonClick}>
          {t("button.spin")}
        </div>
      </div>

      <Modal3Wins
        onClose={handleButtonClick}
        count={count}
        togleModal={togleModal}
        showModal={showModal}
        setShowModal={setShowModal}
        winingArr={winingArr}
        setIsUserActive={setIsUserActive}
        t={t}
        Trans={Trans}
        localefr={localefr}
      />
    </>
  );
}
