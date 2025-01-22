import { Card } from "@/components/card/Card";
import LoadButton from "@/components/loadButton/LoadButton";
import { useEffect, useState } from "react";

const PAGE_LIMIT = 1;
const LIMIT = 4;

export default function Home() {
  const [cards, setCards] = useState<Array<Card>>([]);
  const [loading, setLoading] = useState(false);

  const fetchCardData = async (page: number) => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:3000/api/dummy?page=${page}&limit=${LIMIT}`
      ); // http://localhost:3000/api/dummy?page=1&limit=1
      if (response.ok) {
        const foo = await response.json();
        if (foo.data.length) {
          setCards((prevCards) => [...prevCards, ...(foo.data as Array<Card>)]);
        } else {
          alert("ALL_DATA_FETCHED");
        }
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCardData(PAGE_LIMIT);
  }, []);

  return (
    <>
      <main className="px-2">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </main>
      <div className="item-center">
        <LoadButton
          disabled={loading}
          style={{ marginBlock: "1rem" }}
          onClick={() => {
            fetchCardData(cards.length / LIMIT + 1);
          }}
        >
          Load More..
        </LoadButton>
      </div>
    </>
  );
}
