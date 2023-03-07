import { useToggle } from "react-use";
import TableRow from "../TableRow/TableRow";
const TableColumn = () => {
  const [isOpentRow, setIsOpentRow] = useToggle(false);
  return (
    <div className="w-full mb-5 pt-[20px] shadow-md">
      <div className="flex items-center h-[44px] border-b">
        <div className="w-[30px] h-[30px]  hover:bg-[#F6F8FA]  hover:text-blue-600 hover:rounded-lg">
          <button onClick={setIsOpentRow} className="w-[30px] h-[30px]">
            <span>
              <svg className="pl-2" width="30" height="16" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M12.78 6.22a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L3.22 7.28a.75.75 0 011.06-1.06L8 9.94l3.72-3.72a.75.75 0 011.06 0z"
                ></path>
              </svg>
            </span>
          </button>
        </div>
        <div className="ml-8 text-base font-semibold">
          <span>🌋Urgent</span>
          <span className="bg-[#d6d9db] text-[#57606a] rounded-full ml-2 px-[2px]">
            1
          </span>
        </div>
      </div>
      {isOpentRow && <TableRow />}
    </div>
  );
};

export default TableColumn;
