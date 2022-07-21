import icons from "../../assert/img/icons/Vector.svg";
import ticket from "../../assert/img/icons/ticket.svg";
import headerIcons from "../../assert/img/icons/D.svg";

import { Link } from "react-router-dom";
import { logout } from "../../utils/helper";

export const Navbar = ({ alt, handlerClick }) => {
  return (
    <nav className="bg-dashboardColorKit w-72 h-screen">
      <div className="mx-auto container">
        <div className="flex pt-10 px-1 text-fontColor items-center font-Mulish">
          <img
            src={headerIcons}
            className="
          px-5 relative z-10 "
            alt={alt}
          ></img>
          <div className="absolute bg-blue-700 rounded-full p-4 mx-2.75"></div>
          <h1 className="text-lg">Dashboard Kit</h1>
        </div>
        <ul className="flex flex-col py-14 space-y-5 text-fontColor">
          <div className="flex">
            <img src={icons} className="px-5" alt={alt}></img>
            <li>
              <Link to="/" className="text-white">
                Overview
              </Link>
            </li>
          </div>
          <div className="flex">
            <img src={ticket} className="px-5" alt={alt}></img>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </div>
          <div className="flex">
            <img src={ticket} className="px-5" alt={alt}></img>
            <li>
              <button onClick={() => logout()}>
                <Link to={"/login"}>Log out</Link>
              </button>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};
