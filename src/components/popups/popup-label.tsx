interface IPopupLabelProps {
  value: string;
  valueRef: React.MutableRefObject<HTMLInputElement | null>;
}

export function PopupLabel({ value, valueRef }: IPopupLabelProps) {
  return (
    <label className="popup-form-label">
      <input
        className="popup-form-input"
        type="text"
        id="description"
        name="profile_info_description"
        defaultValue={value}
        ref={valueRef}
      />
    </label>
  );
}
