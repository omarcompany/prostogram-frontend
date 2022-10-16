interface IPopupLabelProps {
  defaultValue: string;
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
}

export const PopupLabel = ({ defaultValue, inputRef }: IPopupLabelProps) => {
  return (
    <label className="popup-form-label">
      <input
        className="popup-form-input"
        type="text"
        id={`popup_label_${defaultValue}`}
        name="popup_label"
        defaultValue={defaultValue}
        ref={inputRef}
      />
    </label>
  );
};
