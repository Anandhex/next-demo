import { ReactNode } from "react";

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = ({ children, ...props }) => {
  return <p {...props}>{children}</p>;
};

export default Paragraph;
