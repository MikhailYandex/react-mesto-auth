import SuccessImage from "../images/success.svg";
import FailedImage from "../images/error.svg";

function InfoTooltip({ onClose, isOpen, isInfoTooltipOk }) {
  return (
    <div className={isOpen ? `popup popup_opened` : `popup`} onClick={onClose}>
      <form
        className="popup__container-infoTooltip"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="popup__close" onClick={onClose} />
        <img
          src={isInfoTooltipOk ? SuccessImage : FailedImage}
          className="popup__infoimage"
        />
        <h2 className="popup__title popup__title_infoTooltip">
          {isInfoTooltipOk
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."}
        </h2>
      </form>
    </div>
  );
}

export default InfoTooltip;
