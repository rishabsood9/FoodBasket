import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnline from "../utilities/useOnline";
import { LOGO_URL } from "./../utilities/mockData";
import UserContext from "./UserContext";

const Header = () => {
  const isOnline = useOnline();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div>
        <img onClick={handleClick} className="w-36" src={LOGO_URL} />
      </div>

      <h1 className="p-4 m-4">
        <Link to="/groceries">Groceries</Link>
      </h1>
      <h2 className="p-4 m-4">Status: {isOnline ? "✅" : "🔴"}</h2>
      <div className="p-4 m-4">
        <ul className="flex items-center ">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">Cart</li>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
