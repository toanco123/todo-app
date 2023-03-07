import AddItem from "../addItem/AddItem";
import { Column } from "../boardColumn/BoardChild";
import CardChild from "./CardChild";

export type CardColumnProps = {
  column: Column;
  addCard: (columnType: string, newCard: any) => void;
};

const CardColumn = (props: CardColumnProps) => {
  const addCard = (newCard: any) => {
    props.addCard(props.column.type, newCard);
  };

  return (
    <>
      <div className="UL LI">
        <ul>
          {props.column.cards.map((card, index) => {
            return (
              <CardChild
                {...card}
                key={index}
                Index={index}
                columnType={props.column.type}
              />
            );
          })}
        </ul>
      </div>
      <AddItem addCard={addCard} />
    </>
  );
};

export default CardColumn;
