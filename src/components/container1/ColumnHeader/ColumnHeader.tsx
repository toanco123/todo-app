import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const ColumnHeader = () => {
  const { setIsOpenSearch }: any = useContext(AppContext);

  return (
    <div className="bg-white flex items-center divide-x divide-slate-200 border-b-4 sticky top-[80px] text-[#57606a]">
      <div className="flex justify-between text-xs w-[250px] h-[34px] px-3 py-2">
        <div className="flex">
          <button
            onClick={setIsOpenSearch}
            className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2"
          >
            <svg width="16" height="16">
              <path
                fill-rule="evenodd"
                d="M.75 3a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H.75zM3 7.75A.75.75 0 013.75 7h8.5a.75.75 0 010 1.5h-8.5A.75.75 0 013 7.75zm3 4a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z"
              ></path>
            </svg>
          </button>
          <span>Title</span>
        </div>
        <div>
          <button>
            <svg width="16" height="16">
              <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="flex justify-between text-xs w-[200px] h-[34px] px-3 py-2">
        <span>Assignees</span>
        <div>
          <button>
            <svg width="16" height="16">
              <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="flex justify-between text-xs w-[200px] h-[34px] px-3 py-2">
        <span>Status</span>
        <div>
          <button>
            <svg width="16" height="16">
              <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="flex justify-between text-xs w-[200px] h-[34px] px-3 py-2">
        <span>Priority</span>
        <div>
          <button>
            <svg width="16" height="16">
              <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="flex justify-between text-xs w-[200px] h-[34px] px-3 py-2">
        <span>Size</span>
        <div>
          <button>
            <svg width="16" height="16">
              <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="flex justify-between text-xs w-[200px] h-[34px] px-3 py-2">
        <span>Linked pull requests</span>
        <div>
          <button>
            <svg width="16" height="16">
              <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="flex justify-between text-xs w-[200px] h-[34px] px-3 py-2">
        <span>Labels</span>
        <div>
          <button>
            <svg width="16" height="16">
              <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="justify-between text-xs px-3 py-2">
        <div>
          <button>
            <svg width="16" height="16">
              <path
                fill-rule="evenodd"
                d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColumnHeader;
