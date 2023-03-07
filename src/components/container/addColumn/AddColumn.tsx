import { useRef, useState } from "react";
import { useClickAway, useToggle } from "react-use";

const AddColumn = (props: any) => {
  const [isOpenColumn, setIsOpenColumn] = useToggle(true);

  const ref = useRef(null);
  useClickAway(ref, () => {
    setIsOpenColumn(false);
  });

  const [value, setValue] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.addColumn(value);
    setValue("");
  };

  const accessibleClick = (onClick: any) => (e: any) => {
    if (e.key === "Enter") {
      onClick(e);
    }
  };

  return (
    <>
      {isOpenColumn && (
        <div
          className="w-[350px] h-[400px] bg-[#F6F8FA] rounded-lg p-3 m-3 shadow-md"
          ref={ref}
        >
          <input
            onChange={(e) => setValue(e.target.value)}
            onKeyPress={accessibleClick(handleSubmit)}
            value={value}
            autoFocus={true}
            type="text"
            placeholder="New column"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      )}
    </>
  );
};
export default AddColumn;
