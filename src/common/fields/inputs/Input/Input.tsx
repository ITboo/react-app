import { FC, HTMLProps } from "react";
import styles from "./Input.module.css";

export interface InputProps extends HTMLProps<HTMLInputElement> {
  isError?: boolean;
  helperText?: string;
}
export const Input: FC<InputProps> = ({
  isError = false,
  helperText,
  ...props
}) => {
  const className = isError ? styles.error : styles.input;
  return (
    <div className={styles.container}>
      <input className={className} {...props} />
      {isError && helperText && <span className={styles.helper_text}>{helperText}</span>}
    </div>
  );
};
