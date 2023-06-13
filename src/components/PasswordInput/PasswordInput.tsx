import "./PasswordInput.styles.scss";

type Props = {
  password: string;
  setPassword: (value: string) => void;
  showPassword: boolean;
  setShowPassword: (value: boolean) => void;
  placeholder: string;
  id?: string;
};

const PasswordInput: React.FC<Props> = ({
  password,
  setPassword,
  showPassword,
  setShowPassword,
  placeholder,
  id,
}) => {
  return (
    <div className="form-group">
      <div className="input-group my-4 form-control p-0">
        <input
          type={!showPassword ? "password" : "text"}
          className="form-control border-0"
          placeholder={placeholder}
          aria-label="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          data-testid={id}
        />
        <span
          className="input-group-text bg-white showText m-0 border-0"
          onClick={() => setShowPassword(!showPassword)}
        >
          {!showPassword ? "SHOW" : "HIDE"}
        </span>
      </div>
    </div>
  );
};

export default PasswordInput;
