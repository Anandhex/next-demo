import { ReactNode } from "react";

interface LinkProps extends React.LinkHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}
const Link: React.FC<LinkProps> = ({ children, ...props }) => {
  return <a {...props}>{children}</a>;
};

export default Link;
