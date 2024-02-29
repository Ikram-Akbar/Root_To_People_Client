import { Link } from "react-router-dom";

const Header = () => {
  const items = (
    <>
      <li>
        <Link to="/home">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link to="/donation">
          <a>Donation</a>
        </Link>
      </li>
      <li>
        <Link to="/statistics">
          <a>Statistics</a>
        </Link>
      </li>
      <li>
        <Link to="/blogs">
          <a>Blogs</a>
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-primary text-primary-content">
     
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow g-primary text-primary-content rounded-box w-52"
            >
              {items}
            </ul>
          </div>
          <a className=" ml-10 font-bold text-2xl">Root To People</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{items}</ul>
        </div>
        <div className="navbar-end">
          <a className="mr-10 btn">Donate Now </a>
        </div>
  
    </div>
  );
};

export default Header;
