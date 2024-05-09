import { FC, HTMLProps, ReactNode } from "react";
import "./Button.css";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children: ReactNode;
}
export const Button: FC<ButtonProps> = ({ children }) => {
  return <button>{children}</button>;
};
