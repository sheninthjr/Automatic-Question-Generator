import GithHub_logo from "../assets/GitHub_logo.png";
import GitHub_mark from "../assets/github-mark.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="bg-gray-900 p-4 z-10 fixed top-0 w-full">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex-start text-lg font-bold text-white sm:hidden italic"
          >
            Jr
          </Link>
          <a
            href="/"
            className="text-lg font-bold text-white hidden sm:inline italic"
          >
            Jr Generator
          </a>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-blue-500">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-blue-500">
                Contact
              </a>
            </li>
            <li>
              <div className="items-center space-x-2 hidden sm:flex">
                <Link
                  to="https://github.com/sheninthjr/Automatic-Question-Generator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={GitHub_mark} alt="GitHub" width="25" height="30" />
                </Link>
                <Link
                  to="https://github.com/sheninthjr/Automatic-Question-Generator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={GithHub_logo} alt="GitHub" width="50" height="30" />
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
