import icons from "../../assert/img/icons/Vector.svg";
import ideas from "../../assert/img/icons/ideas.svg";
import ticket from "../../assert/img/icons/ticket.svg";
import contact from "../../assert/img/icons/contact.svg";
import article from "../../assert/img/icons/article.svg";
import agent from "../../assert/img/icons/agent.svg";
import headerIcons from "../../assert/img/icons/D.svg";
import { Link } from "react-router-dom";

export const Navbar = ({ alt }) => {
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
            <img src={ideas} className="px-5" alt={alt}></img>
            <li>
              <Link to="/ideas">Ideas</Link>
            </li>
          </div>
          <div className="flex">
            <img src={contact} className="px-5" alt={alt}></img>
            <li>
              <Link to="/contact">Contacts</Link>
            </li>
          </div>
          <div className="flex">
            <img src={agent} className="px-5" alt={alt}></img>
            <li>
              <Link to="/agent">Agents</Link>
            </li>
          </div>
          <div className="flex">
            <img src={article} className="px-5" alt={alt}></img>
            <li>
              <Link to="/article">Articles</Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};
