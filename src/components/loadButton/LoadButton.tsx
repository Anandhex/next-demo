import { MouseEventHandler, ReactNode } from "react";
import styles from "./styles.module.scss";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const LoadButton: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button className={`${className ?? ""} ${styles.button}`} {...props}>
      {children}
    </button>
  );
};

export default LoadButton;
