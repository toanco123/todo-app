import AddItem from "../../container/addItem/AddItem";
import { Column } from "../../container/boardColumn/BoardChild";
import CardChild1 from "./CardChild1";

export type CardColumnProps = {
  column: Column;
  addCard: (columnType: string, newCard: any) => void;
};

const CardColumn1 = (props: CardColumnProps) => {
  const addCard = (newCard: any) => {
    props.addCard(props.column.type, newCard);
  };

  return (
    <>
      <div className="UL LI">
        <ul>
          {props.column.cards.map((card, index) => {
            return (
              <CardChild1
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

export default CardColumn1;
