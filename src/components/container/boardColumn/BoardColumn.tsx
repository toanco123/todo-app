import { Key, useContext } from "react";
import { useDrop } from "react-dnd";
import BoardChild, { Column } from "./BoardChild";
import AddColumn from "../addColumn/AddColumn";
import { AppContext } from "../../context/AppContext";

function BoardColumn() {
  const {
    ref,
    isOpen,
    columns,
    addColumn,
    setIsopen,
    isOpenColumn,
    setIsOpenColumn,
  }: any = useContext(AppContext);

  const [, drop] = useDrop(
    () => ({
      accept: "COLUMN",
    }),
    []
  );
  return (
    <ul ref={drop} className="flex absolute top-[150px]">
      {columns.map((column: Column, index: Key) => {
        return <BoardChild column={column} key={index} id={column.id} />;
      })}

      {/* show hide column  */}
      <div className="relative">
        <div className="bg-[#F6F8FA] h-[36px] w-[36px] m-3 flex items-center justify-center rounded-lg">
          <button onClick={setIsopen}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-[16px] h-[20px]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>

        <div className="flex mt-[-60px]">
          {isOpenColumn && <AddColumn addColumn={addColumn} />}

          {isOpen && (
            <div
              className="w-[200px] h-[400px] bg-white m-3 border rounded-lg text-center shadow-md"
              ref={ref}
            >
              <div
                onClick={setIsOpenColumn}
                className=" flex items-center hover:bg-[#f6f8fa] cursor-pointer"
              >
                <button className="h-[36px] w-[36px] m-3 flex items-center justify-center rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-[16px] h-[20px]"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
                <span>New Column</span>
              </div>
              <span>Visible column(s)</span>
            </div>
          )}
        </div>
      </div>
    </ul>
  );
}

export default BoardColumn;
