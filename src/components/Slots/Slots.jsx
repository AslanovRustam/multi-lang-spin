import { useState } from "react";
import s from "./slots.module.css";
import slot1 from "../../images/slot1.png";
import slot2 from "../../images/slot2.png";
import slot3 from "../../images/slot3.png";
import Modal3Wins from "../Modal/Modal3Wins";

export default function Slots({ winingArr, setWiningArr }) {
  const [count, setCount] = useState(4);
  const [showModal, setShowModal] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const list = [1, 2, 3, 8, 5, 2, 3, 1];

  // 0 - spin again
  // 3 - third line
  // 2 - second line
  // 1- first line
  // 5- start

  const handleButtonClick = () => {
    const randomNum = getRandomNumberFromList();
    if (isButtonDisabled) {
      return;
    }
    setIsButtonDisabled(true);
    if (winingArr.includes(randomNum)) {
      handleButtonClick();
      return;
    }

    if (randomNum === count) {
      const newCount = getRandomNumberFromList();
      setWiningArr([...winingArr, newCount]);
      setCount(newCount);
    } else {
      setWiningArr([...winingArr, randomNum]);
      setCount(randomNum);
    }
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 3500);
    if (winingArr.length === 2) {
      setTimeout(() => setShowModal(true), 4000);
    }
  };

  const getRandomNumberFromList = () => {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
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
              } ${count === 8 && s.item_1_spin_3} ${
                count === 3 && s.item_1_spin_4
              } ${count === 5 && s.item_1_spin_start}`}
              src={slot1}
              alt="slot"
            />
          </div>
          <div className={s.slotItem}>
            <img
              className={`${s.slot} ${count === 2 && s.item_2_spin_1} ${
                count === 1 && s.item_2_spin_2
              }  ${count === 8 && s.item_2_spin_3} ${
                count === 3 && s.item_2_spin_4
              } ${count === 5 && s.item_2_spin_start} `}
              src={slot2}
              alt="slot"
            />
          </div>
          <div className={s.slotItem}>
            <img
              className={`${s.slot} ${count === 2 && s.item_3_spin_1} ${
                count === 1 && s.item_3_spin_2
              } ${count === 8 && s.item_3_spin_3} ${
                count === 3 && s.item_3_spin_4
              } ${count === 5 && s.item_3_spin_start}`}
              src={slot3}
              alt="slot"
            />
          </div>
        </div>
        <div className={s.button} onClick={handleButtonClick}>
          КРУТИТЬ
        </div>
      </div>

      <Modal3Wins
        onClose={handleButtonClick}
        count={count}
        togleModal={togleModal}
        showModal={showModal}
        setShowModal={setShowModal}
        winingArr={winingArr}
      />
    </>
  );
}
