import { useState } from "react";

const Search = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (e: any) => {
    setSearchText(e.target.value);
    console.log("handleSearchTextChange", e);
  };

  return (
    <form className="top-[80px]">
      <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M.75 3a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H.75zM3 7.75A.75.75 0 013.75 7h8.5a.75.75 0 010 1.5h-8.5A.75.75 0 013 7.75zm3 4a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z"
            ></path>
          </svg>
        </div>
        <input
          onChange={handleSearchTextChange}
          value={searchText}
          className="block w-screen p-4 pl-10 text-sm text-gray-900 border-b border-t"
          placeholder="Filter by keyword or by field"
          required
        />
      </div>
    </form>
  );
};
export default Search;
