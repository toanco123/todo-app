import React, { useRef, useState } from "react";
import { useClickAway, useToggle } from "react-use";

const AddItem = (props: any) => {
  const [isOpen, setIsopen] = useToggle(false);

  const ref = useRef(null);
  useClickAway(ref, () => {
    setIsopen(false);
  });

  const [value, setValue] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.addCard(value);
    setValue("");
  };

  const accessibleClick = (onClick: any) => (e: any) => {
    if (e.key === "Enter") {
      onClick(e);
    }
  };

  return (
    <div className="ADD ITEM absolute bottom-[20px]">
      <button
        aria-label="Add item"
        data-test-id="board-view-add-card-button"
        className="flex items-center"
        onClick={setIsopen}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          role="img"
          className=""
          viewBox="0 0 16 16"
          width="16"
          height="16"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"
          ></path>
        </svg>
        Add item
      </button>
      {isOpen && (
        <div
          className="fixed bottom-2 left-0 w-full rounded-lg border-2 border-indigo-600 z-20"
          ref={ref}
        >
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Add item
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
            <input
              onChange={(e) => setValue(e.target.value)}
              onKeyPress={accessibleClick(handleSubmit)}
              autoFocus={true}
              value={value}
              type="text"
              id="search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Add item"
              required
            />
            <button
              onClick={handleSubmit}
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddItem;
