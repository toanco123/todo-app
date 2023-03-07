import BoardColumn from "./boardColumn/BoardColumn";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Search from "../search/Search";

function Container() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="containerChild">
        <Search />
        <BoardColumn />
      </div>
    </DndProvider>
  );
}

export default Container;
