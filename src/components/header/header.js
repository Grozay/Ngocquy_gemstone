import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="max-w-full bg-black h-16">
      <nav className="flex items-center h-full justify-between">
        <div className="flex items-center ml-2">
          <Link to="/">
            <img src="./logo.png" alt="logo" className="h-14 mr-2" />
          </Link>
          <div>
            <Link to="/">
              <h1 className="text-white text-3xl">Ngọc Quý</h1>
            </Link>
            <span className="text-white">Gemstone</span>
          </div>
        </div>
        <div className="flex items-center">
          <Link to="/setting" className="text-white mr-8 text-xl">
            <i className="fa-solid fa-gear"></i>
          </Link>
          <Link to="/notification" className="relative text-white mr-8 text-xl">
            <i className="fa-regular fa-bell"></i>
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
              2
            </span>
          </Link>
          <Link to="/user" className="text-white mr-8 text-xl">
            <i className="fa-solid fa-circle-user"></i>
          </Link>
        </div>
      </nav>
    </div>
  );
};
export default Header;
