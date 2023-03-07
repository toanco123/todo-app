import { useContext } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Container from "../container/Container";
import Container1 from "../container1/Container1";
import Container2 from "../container2/Container2";
import { AppContext } from "../context/AppContext";
import Search from "../search/Search";

const TabNav = () => {
  const { isOpenSearch }: any = useContext(AppContext);

  return (
    <div className="LIST font-sans w-full">
      <ul className="flex border-b fixed top-[39px]">
        <li className="-mb-px mr-1">
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    background: "#F6F8FA",
                  }
                : {}
            }
            className="inline-block border-l border-t border-r rounded-t py-2 px-4"
            to="/"
          >
            <div className="flex items-center mr-5">
              <div>
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
                    d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"
                  ></path>
                </svg>
              </div>
              <span className="px-3 text-sm">Blacklog</span>
              <div className="">
                <button className="bg-[#F3F4F6]">
                  <span className="">
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
                      <path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </NavLink>
        </li>
        <li className="mr-1">
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    background: "#F6F8FA",
                  }
                : {}
            }
            className=" inline-block py-2 px-4 "
            to="/ByPriority"
          >
            <div className="flex items-center mr-5">
              <div>
                <svg width="16" height="16">
                  <path
                    fill-rule="evenodd"
                    d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0114.25 16H1.75A1.75 1.75 0 010 14.25V1.75zM1.5 6.5v7.75c0 .138.112.25.25.25H5v-8H1.5zM5 5H1.5V1.75a.25.25 0 01.25-.25H5V5zm1.5 1.5v8h7.75a.25.25 0 00.25-.25V6.5h-8zm8-1.5h-8V1.5h7.75a.25.25 0 01.25.25V5z"
                  ></path>
                </svg>
              </div>
              <span className="px-3 text-sm">By priority</span>
            </div>
          </NavLink>
        </li>
        <li className="mr-1">
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    background: "#F6F8FA",
                  }
                : {}
            }
            className="inline-block py-2 px-4 border-l"
            to="/BySize"
          >
            <div className="flex items-center mr-5">
              <div>
                <svg viewBox="0 0 16 16" width="16" height="16">
                  <path
                    fill-rule="evenodd"
                    d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0114.25 16H1.75A1.75 1.75 0 010 14.25V1.75zM1.5 6.5v7.75c0 .138.112.25.25.25H5v-8H1.5zM5 5H1.5V1.75a.25.25 0 01.25-.25H5V5zm1.5 1.5v8h7.75a.25.25 0 00.25-.25V6.5h-8zm8-1.5h-8V1.5h7.75a.25.25 0 01.25.25V5z"
                  ></path>
                </svg>
              </div>
              <span className="px-3 text-sm">By size</span>
            </div>
          </NavLink>
        </li>
        <li className="mr-1">
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    background: "#F6F8FA",
                  }
                : {}
            }
            className="inline-block py-2 px-4 border-l"
            to="/NewView"
          >
            <div className="flex items-center mr-5">
              <div>
                <svg viewBox="0 0 16 16" width="16" height="16">
                  <path
                    fill-rule="evenodd"
                    d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"
                  ></path>
                </svg>
              </div>
              <span className="px-3 text-sm">New view</span>
            </div>
          </NavLink>
        </li>
      </ul>
      {isOpenSearch && <Search />}

      <Routes>
        <Route path="/" element={<Container />}></Route>
        <Route path="/ByPriority" element={<Container1 />}></Route>
        <Route path="/BySize" element={<Container2 />}></Route>
        <Route path="/NewView" element={<Container2 />}></Route>
      </Routes>
    </div>
  );
};

export default TabNav;
