import "./Input.styles.scss";

type Props = {
  value: string;
  setValue: (value: string) => void;
  type: string;
  placeholder: string;
  id?: string;
  label?: string;
  inputClassName?: string;
};

const Input: React.FC<Props> = ({
  value,
  setValue,
  type,
  placeholder,
  id,
  label,
  inputClassName,
}) => {
  return (
    <div className="form-group">
      {label && (
        <label
          htmlFor={`exampleDropdownFormValue2${id}`}
          className="form-label"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        className={`form-control ${inputClassName}`}
        id={id}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        data-testid={id}
        autoComplete="off"
      />
    </div>
  );
};

export default Input;
