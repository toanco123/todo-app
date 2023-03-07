import { useState } from "react";

const TableRow = (props: any) => {
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
    <div>
      <ul>
        <li>
          <div className=" w-full flex h-[34px] border-b">
            <div className="flex justify-between text-xs w-[250px] px-3 py-2">
              <span>Assignees</span>
              <div>
                <button>
                  <svg width="16" height="16">
                    <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="w-[200px] border-l">
              <form>
                <div className="text-gray-800 bg-white">
                  <select className="w-full py-1 px-2 bg-white">
                    <option className="" value="0">
                      <span>🆕 New</span>
                    </option>
                    <option className="" value="1">
                      <span>📋 Blacklog</span>
                    </option>
                    <option className="" value="2">
                      <span>🔖 Ready</span>
                    </option>
                    <option className="" value="3">
                      <span>👀 In review</span>
                    </option>
                    <option className="" value="4">
                      <span>✅ Done</span>
                    </option>
                  </select>
                  {/* <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                      <svg width="16" height="16" fill="currentColor">
                        <path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"></path>
                      </svg>
                    </div> */}
                </div>
              </form>
            </div>
            <div className="w-[200px] border-l">
              <form>
                <div className="text-gray-800 bg-white">
                  <select className=" w-full py-1 px-2 bg-white">
                    <option className="" value="0">
                      <span></span>
                    </option>
                    <option className="" value="0">
                      <span></span>
                    </option>
                  </select>
                  {/* <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                      <svg width="16" height="16" fill="currentColor">
                        <path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"></path>
                      </svg>
                    </div> */}
                </div>
              </form>
            </div>
            <div className="w-[200px] border-l">
              <form>
                <div className=" text-gray-800 bg-white">
                  <select className=" w-full py-1 px-2 bg-white">
                    <option className="" value="0">
                      <span></span>
                    </option>
                    <option className="" value="0">
                      <span></span>
                    </option>
                  </select>
                  {/* <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                      <svg width="16" height="16" fill="currentColor">
                        <path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"></path>
                      </svg>
                    </div> */}
                </div>
              </form>
            </div>
            <div className="w-[200px] border-l">
              <form>
                <div className=" text-gray-800 bg-white">
                  <select className=" w-full py-1 px-2 bg-white">
                    <option className="" value="0">
                      <span>🌋 Urgent</span>
                    </option>
                    <option className="" value="1">
                      <span>🏰 High</span>
                    </option>
                    <option className="" value="2">
                      <span>⛺️ Medium</span>
                    </option>
                    <option className="" value="3">
                      <span>🌴 Low</span>
                    </option>
                  </select>
                  {/* <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                      <svg width="16" height="16" fill="currentColor">
                        <path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"></path>
                      </svg>
                    </div> */}
                </div>
              </form>
            </div>
            <div className="w-[200px] border-l">
              <form>
                <div className=" text-gray-800 bg-white">
                  <select className=" w-full py-1 px-2 bg-white">
                    <option className="" value="0">
                      <span></span>
                    </option>
                    <option className="" value="0">
                      <span></span>
                    </option>
                  </select>
                  {/* <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                      <svg width="16" height="16" fill="currentColor">
                        <path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"></path>
                      </svg>
                    </div> */}
                </div>
              </form>
            </div>
          </div>
        </li>
      </ul>
      {/* add item */}
      <div className="flex h-9">
        <button className="w-9 hover:bg-slate-300 rounded-lg">
          <svg className="pl-3" width="36" height="16" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"
            ></path>
          </svg>
        </button>
        <input
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={accessibleClick(handleSubmit)}
          value={value}
          placeholder="Add item..."
          type="text"
          id="small-input"
          className="block w-full p-2 text-gray-900 border border-gray-300 bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></input>
      </div>
    </div>
  );
};

export default TableRow;
