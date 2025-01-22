import styles from "./styles.module.scss";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ ...props }) => {
  return (
    <img
      className={`${props.className ?? ""} ${styles["img-base"]}`}
      {...props}
    />
  );
};

export default Image;
