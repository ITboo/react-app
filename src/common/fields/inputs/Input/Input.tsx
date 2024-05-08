import { FC, HTMLProps } from "react";
import "./Input.css";

interface InputProps extends HTMLProps<HTMLInputElement> {
  isError?: boolean;
  helperText?: string;
}
export const Input: FC<InputProps> = ({
  isError = false,
  helperText,
  ...props
}) => {
  const className = isError ? "error" : "";
  return (
    <div className="input__container">
      <input className={className} {...props} />
      {isError && helperText && <span className="helper_text">{helperText}</span>}
    </div>
  );
};
