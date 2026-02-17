import { FC } from "react";

interface ButtonProps {
  buttonType: string;
  text: string;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ buttonType, text, onClick }) => {
  return (
    <button
      className={`webel-button body-semibold-14 type-${buttonType}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
