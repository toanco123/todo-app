import { FC, useContext, useRef } from "react";
import { useClickAway, useToggle } from "react-use";
import { AppContext } from "../../context/AppContext";

export interface Card {
  text: string;
  icon: string;
  decription: string;
  id: number;
  Index: number;
  columnType: string;
}

const CardChild: FC<Card> = (props) => {
  const { handleRemoveCard }: any = useContext(AppContext);
  const [isOpen, setIsopen] = useToggle(false);

  const ref = useRef(null);
  useClickAway(ref, () => {
    setIsopen(false);
  });

  return (
    <li>
      <div className="group bg-white rounded-lg h-28 p-3 my-3 cursor-grab">
        <div className="Header flex items-center">
          <svg
            aria-hidden="false"
            focusable="false"
            aria-label="Draft issue"
            role="img"
            className=""
            viewBox="0 0 16 16"
            width="16"
            height="16"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M6.749.097a8.054 8.054 0 012.502 0 .75.75 0 11-.233 1.482 6.554 6.554 0 00-2.036 0A.75.75 0 016.749.097zM4.345 1.693A.75.75 0 014.18 2.74a6.542 6.542 0 00-1.44 1.44.75.75 0 01-1.212-.883 8.042 8.042 0 011.769-1.77.75.75 0 011.048.166zm7.31 0a.75.75 0 011.048-.165 8.04 8.04 0 011.77 1.769.75.75 0 11-1.214.883 6.542 6.542 0 00-1.439-1.44.75.75 0 01-.165-1.047zM.955 6.125a.75.75 0 01.624.857 6.554 6.554 0 000 2.036.75.75 0 01-1.482.233 8.054 8.054 0 010-2.502.75.75 0 01.858-.624zm14.09 0a.75.75 0 01.858.624 8.057 8.057 0 010 2.502.75.75 0 01-1.482-.233 6.55 6.55 0 000-2.036.75.75 0 01.624-.857zm-13.352 5.53a.75.75 0 011.048.165 6.542 6.542 0 001.439 1.44.75.75 0 01-.883 1.212 8.04 8.04 0 01-1.77-1.769.75.75 0 01.166-1.048zm12.614 0a.75.75 0 01.165 1.048 8.038 8.038 0 01-1.769 1.77.75.75 0 11-.883-1.214 6.543 6.543 0 001.44-1.439.75.75 0 011.047-.165zm-8.182 3.39a.75.75 0 01.857-.624 6.55 6.55 0 002.036 0 .75.75 0 01.233 1.482 8.057 8.057 0 01-2.502 0 .75.75 0 01-.624-.858z"
            ></path>
          </svg>
          <span className="px-3">Draft</span>
          <div className="hidden group-hover:block relative">
            <button onClick={setIsopen}>
              <span className="">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  role="img"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                  fill="currentColor"
                >
                  <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                </svg>
              </span>
            </button>
            {isOpen && (
              <div
                ref={ref}
                className="w-[212px] h-[112px] bg-white shadow-md rounded-lg absolute left-0"
              >
                <ul className="py-2">
                  <li>
                    <div className="flex px-2 py-1 mx-2 items-center bg-[#F6F8FA] rounded-lg">
                      <span className="text-[#9ea0a1]">
                        <svg
                          viewBox="0 0 16 16"
                          width="16"
                          height="16"
                          fill="currentColor"
                        >
                          <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                          <path
                            fill-rule="evenodd"
                            d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
                          ></path>
                        </svg>
                      </span>
                      <div>
                        <span className="pl-2 text-[#24292f] text-sm">
                          Convert to issue
                        </span>
                      </div>
                    </div>
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
                        <span className="pl-2 text-[#24292f] text-sm">
                          Archive
                        </span>
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
                          onClick={() =>
                            handleRemoveCard(props.columnType, props.id)
                          }
                          className="pl-2"
                        >
                          Delete from project
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <h2>{props.text}</h2>
        <div className="FOOTER mt-3">
          <button className="border rounded-2xl bg-[#F6F8FA]">
            <span>
              {props.icon} {props.decription}
            </span>
            {/* <span>{props.size}</span> */}
          </button>
        </div>
      </div>
    </li>
  );
};

export default CardChild;
