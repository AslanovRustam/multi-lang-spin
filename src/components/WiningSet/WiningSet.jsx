import s from "./winingSet.module.css";
import firstSpinBg from "../../images/spin1.png";
import secondSpinBg from "../../images/spin2.png";

export default function WiningSet({ winingArr, Trans, t }) {
  const renderBonus = (data) => {
    if (data === 1) {
      return (
        <>
          <p className={s.bonusValue}>150</p>
          <p className={s.bonusDescription}>{t("first_spin.win")}</p>
        </>
      );
    }
    if (data === 2) {
      return (
        <>
          <p className={s.bonusValue}>375%</p>
          <p className={s.bonusDescriptionSecond}>
            <Trans i18nKey="second_spin.win" />
          </p>
        </>
      );
    }
  };

  return (
    <>
      <div className={s.containerRight}>
        <img className={s.spinBg} src={firstSpinBg} alt="first win" />
        <div className={s.item}>
          {winingArr[0] ? (
            <div className={s.bonus}>{renderBonus(winingArr[0])}</div>
          ) : (
            <p className={s.default}>{t("first_spin.default")}</p>
          )}
        </div>
      </div>
      <div className={s.containerLeft}>
        <img className={s.spinBg} src={secondSpinBg} alt="second win" />
        <div className={s.item}>
          {winingArr[1] ? (
            <div className={s.bonus}>{renderBonus(winingArr[1])}</div>
          ) : (
            <p className={s.default}>
              <Trans i18nKey="second_spin.default" />
            </p>
          )}
        </div>
      </div>
    </>
  );
}
