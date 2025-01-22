import styles from "./style.module.scss";
import Image from "../Image/Image";
import Header, { HeaderSize } from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";
import Link from "next/link";
export type Card = {
  id: string;
  header: string;
  body: string;
  link: string;
  image: string;
};

interface CardProps {
  card: Card;
  reverse?: boolean;
}
export const Card: React.FC<CardProps> = ({ card, reverse }) => {
  const { header, body, link, image } = card;
  return (
    <article className={`${styles.card} ${reverse ? styles.reverse : ""}`}>
      <Image src={image} alt={header} />
      <section className={styles["card-content"]}>
        <section className={styles["card-body"]}>
          <Header
            style={{ marginBottom: "1rem" }}
            size={HeaderSize.SecondaryHeader}
          >
            {header}
          </Header>
          <Paragraph>{body}</Paragraph>
        </section>

        <div className={styles["card-footer"]}>
          <Link href={link}>Read more</Link>
        </div>
      </section>
    </article>
  );
};
