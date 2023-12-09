import React from "react";
import { Link } from "react-router-dom";

function MiniNavbar() {
  return (
    <div className="bg-base-200">
      <div className=" md:mx-24 py-2 flex justify-between">
        <div className="flex">
          <Link className="mx-2" to="/matches">
            MATCHES
          </Link>
          <div>
            <Link className="mx-3" to="/">
              SYS vs MLR - SYS Won
            </Link>
            <Link className="mx-3" to="/">
              BAN vs NZ - Stumps
            </Link>
            <Link className="mx-3" to="/">
              NYS vs MSA - NYS Won
            </Link>
            <Link className="mx-3" to="/">
              BGT vs DEG - Complete
            </Link>
            <Link className="mx-3" to="/">
              ADS vs BRH - Preview
            </Link>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="m-1">
            ALL
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MiniNavbar;
