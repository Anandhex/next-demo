import { ReactNode } from "react";
import styles from "./style.module.scss";
export enum HeaderSize {
  "MainHeader" = 1,
  "SecondaryHeader",
  "TertiaryHeader",
}

// type HeaderSize = 1 | 2 | 3 | 4 | 5 | 6;

interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  size: HeaderSize;
}

const Header: React.FC<HeaderProps> = ({
  children,
  size,
  className,
  ...props
}) => {
  switch (size) {
    case HeaderSize.MainHeader:
      return (
        <h1 className={`${className ?? ""} ${styles["header-h1"]} `} {...props}>
          {children}
        </h1>
      );
    case HeaderSize.SecondaryHeader:
      return (
        <h2 className={`${className ?? ""} ${styles["header-h2"]}`} {...props}>
          {children}
        </h2>
      );
    case HeaderSize.TertiaryHeader:
      return (
        <h3 className={`${className ?? ""} ${styles["header-h3"]}`} {...props}>
          {children}
        </h3>
      );
    default:
      return (
        <h4 className={`${className ?? ""} ${styles["header-h4"]}`} {...props}>
          {children}
        </h4>
      );
  }
};

export default Header;
