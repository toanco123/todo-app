import { FC } from "react";

export interface Card {
  text: string;
  icon: string;
  decription: string;
  id: number;
  Index: number;
  columnType: string;
}

const CardChild1: FC<Card> = (props) => {
  return (
    <li>
      <div className=" w-full flex h-[34px] border-b">
        <div className="flex justify-between text-xs w-[250px] px-3 py-2">
          <div>
            <svg width="16" height="16" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M6.749.097a8.054 8.054 0 012.502 0 .75.75 0 11-.233 1.482 6.554 6.554 0 00-2.036 0A.75.75 0 016.749.097zM4.345 1.693A.75.75 0 014.18 2.74a6.542 6.542 0 00-1.44 1.44.75.75 0 01-1.212-.883 8.042 8.042 0 011.769-1.77.75.75 0 011.048.166zm7.31 0a.75.75 0 011.048-.165 8.04 8.04 0 011.77 1.769.75.75 0 11-1.214.883 6.542 6.542 0 00-1.439-1.44.75.75 0 01-.165-1.047zM.955 6.125a.75.75 0 01.624.857 6.554 6.554 0 000 2.036.75.75 0 01-1.482.233 8.054 8.054 0 010-2.502.75.75 0 01.858-.624zm14.09 0a.75.75 0 01.858.624 8.057 8.057 0 010 2.502.75.75 0 01-1.482-.233 6.55 6.55 0 000-2.036.75.75 0 01.624-.857zm-13.352 5.53a.75.75 0 011.048.165 6.542 6.542 0 001.439 1.44.75.75 0 01-.883 1.212 8.04 8.04 0 01-1.77-1.769.75.75 0 01.166-1.048zm12.614 0a.75.75 0 01.165 1.048 8.038 8.038 0 01-1.769 1.77.75.75 0 11-.883-1.214 6.543 6.543 0 001.44-1.439.75.75 0 011.047-.165zm-8.182 3.39a.75.75 0 01.857-.624 6.55 6.55 0 002.036 0 .75.75 0 01.233 1.482 8.057 8.057 0 01-2.502 0 .75.75 0 01-.624-.858z"
              ></path>
            </svg>
          </div>
          <span>{props.text}</span>
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
            </div>
          </form>
        </div>
      </div>
    </li>
  );
};

export default CardChild1;
