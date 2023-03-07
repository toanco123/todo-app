import { FC, useContext, useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useClickAway, useToggle } from "react-use";
import { AppContext } from "../../context/AppContext";
import CardColumn from "../cardColumn/CardColumn";

export interface Column {
  id: number;
  title: string;
  icon: string;
  type: string;
  cards: any[];
}

type BoardChildProps = {
  column: Column;
  id: number;
};

const BoardChild: FC<BoardChildProps> = ({ column, id }) => {
  const {
    moveColumn,
    findColumn,
    addCard,
    handleRemoveColumn,
    handleEditColumn,
  }: any = useContext(AppContext);
  const originalIndex = findColumn(id).index;

  const [, drag] = useDrag(
    () => ({
      type: "COLUMN",
      item: { ...column, originalIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, _monitor) => {
        console.log(item);
        const { id: droppedId, originalIndex } = item;
        const didDrop = _monitor.didDrop();
        if (!didDrop) {
          moveColumn(droppedId, originalIndex);
        }
      },
    }),

    [originalIndex, moveColumn]
  );

  const [, drop] = useDrop(
    () => ({
      accept: "COLUMN",
      hover({ id: draggedId }: Column) {
        if (draggedId !== column.id) {
          const { index: originalIndex } = findColumn(id);
          moveColumn(draggedId, originalIndex);
        }
      },
    }),
    [findColumn, moveColumn]
  );

  const [isOpen, setIsopen] = useToggle(false);
  const [isEdit, setIsEdit] = useToggle(false);
  const [updatedText, setUpdatedText] = useState("");

  const accessibleClick = (onClick: any) => (e: any) => {
    if (e.key === "Enter") {
      onClick(e);
    }
  };

  const ref = useRef(null);
  useClickAway(ref, () => {
    setIsopen(false);
  });

  return (
    <li ref={(node) => drag(drop(node))}>
      <div className="w-[350px] h-[400px] bg-[#F6F8FA] rounded-lg p-3 m-3 shadow-md relative">
        <div className="Hearder flex justify-between">
          <div className="flex">
            <h3>
              {column.icon}
              <span>{column.title}</span>
            </h3>
            <span className="bg-[#d6d9db] text-[#57606a] rounded-full ml-2 px-[2px]">
              {column.cards.length}
            </span>
          </div>

          {/* Menu Column */}
          <div className="relative">
            <button onClick={setIsopen}>
              <span className="">
                <svg width="16" height="16" fill="currentColor">
                  <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                </svg>
              </span>
            </button>
            {isOpen && (
              <div
                ref={ref}
                className="w-[192px] h-[160px] bg-white shadow-md rounded-lg absolute right-0"
              >
                <ul className="py-2">
                  <li>
                    <div
                      onClick={setIsEdit}
                      className="flex px-2 py-1 mx-2 items-center bg-[#F6F8FA] rounded-lg cursor-pointer"
                    >
                      <span className="text-[#9ea0a1]">
                        <svg
                          viewBox="0 0 16 16"
                          width="16"
                          height="16"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z"
                          ></path>
                        </svg>
                      </span>
                      <div>
                        <span className="pl-2 text-[#24292f]">Rename</span>
                      </div>
                    </div>
                    {isEdit && (
                      <div className="fixed top-[198px] left-[65px]">
                        <input
                          type="text"
                          autoFocus={true}
                          value={updatedText}
                          onChange={(e) => setUpdatedText(e.target.value)}
                          onKeyPress={accessibleClick(
                            handleEditColumn(id, updatedText)
                          )}
                        />
                      </div>
                    )}
                  </li>
                  <li>
                    <div className="flex px-2 py-1 mx-2 items-center hover:bg-[#F6F8FA] hover:rounded-lg cursor-pointer">
                      <span className="text-[#9ea0a1]">
                        <svg
                          viewBox="0 0 16 16"
                          width="16"
                          height="16"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.75 2.5a.25.25 0 00-.25.25v1.5c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25v-1.5a.25.25 0 00-.25-.25H1.75zM0 2.75C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75v1.5A1.75 1.75 0 0114.25 6H1.75A1.75 1.75 0 010 4.25v-1.5zM1.75 7a.75.75 0 01.75.75v5.5c0 .138.112.25.25.25h10.5a.25.25 0 00.25-.25v-5.5a.75.75 0 111.5 0v5.5A1.75 1.75 0 0113.25 15H2.75A1.75 1.75 0 011 13.25v-5.5A.75.75 0 011.75 7zm4.5 1a.75.75 0 000 1.5h3.5a.75.75 0 100-1.5h-3.5z"
                          ></path>
                        </svg>
                      </span>
                      <div>
                        <span className="pl-2 text-[#24292f]">
                          Archive all cards
                        </span>
                      </div>
                    </div>
                  </li>
                  <div className="h-[1px] my-2 bg-[#d1d7de]"></div>
                  <li>
                    <div className="flex px-2 py-1 mx-2 items-center hover:bg-[#F6F8FA] hover:rounded-lg cursor-pointer">
                      <span className="text-[#9ea0a1]">
                        <svg
                          viewBox="0 0 16 16"
                          width="16"
                          height="16"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M.143 2.31a.75.75 0 011.047-.167l14.5 10.5a.75.75 0 11-.88 1.214l-2.248-1.628C11.346 13.19 9.792 14 8 14c-1.981 0-3.67-.992-4.933-2.078C1.797 10.832.88 9.577.43 8.9a1.618 1.618 0 010-1.797c.353-.533.995-1.42 1.868-2.305L.31 3.357A.75.75 0 01.143 2.31zm3.386 3.378a14.21 14.21 0 00-1.85 2.244.12.12 0 00-.022.068c0 .021.006.045.022.068.412.621 1.242 1.75 2.366 2.717C5.175 11.758 6.527 12.5 8 12.5c1.195 0 2.31-.488 3.29-1.191L9.063 9.695A2 2 0 016.058 7.52l-2.53-1.832zM8 3.5c-.516 0-1.017.09-1.499.251a.75.75 0 11-.473-1.423A6.23 6.23 0 018 2c1.981 0 3.67.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.619 1.619 0 010 1.798c-.11.166-.248.365-.41.587a.75.75 0 11-1.21-.887c.148-.201.272-.382.371-.53a.119.119 0 000-.137c-.412-.621-1.242-1.75-2.366-2.717C10.825 4.242 9.473 3.5 8 3.5z"
                          ></path>
                        </svg>
                      </span>
                      <div>
                        <span className="pl-2 text-[#24292f]">Hide column</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex px-2 py-1 mx-2 text-red-500 items-center hover:bg-red-100 hover:rounded-lg cursor-pointer">
                      <span className="">
                        <svg
                          viewBox="0 0 16 16"
                          width="16"
                          height="16"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M6.5 1.75a.25.25 0 01.25-.25h2.5a.25.25 0 01.25.25V3h-3V1.75zm4.5 0V3h2.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75zM4.496 6.675a.75.75 0 10-1.492.15l.66 6.6A1.75 1.75 0 005.405 15h5.19c.9 0 1.652-.681 1.741-1.576l.66-6.6a.75.75 0 00-1.492-.149l-.66 6.6a.25.25 0 01-.249.225h-5.19a.25.25 0 01-.249-.225l-.66-6.6z"
                          ></path>
                        </svg>
                      </span>
                      <div>
                        <button
                          onClick={() => {
                            handleRemoveColumn(id);
                          }}
                          className="pl-2"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-between h-5/6  overflow-auto">
          <CardColumn column={column} addCard={addCard} />
        </div>
      </div>
    </li>
  );
};

export default BoardChild;
