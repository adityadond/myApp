import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./utils/UserContext";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMkML6BRWil3kliTdFT-6LYBEeRsnkd_hmMNAowM3oalP-VbwLnT7vvG70rlP2_gcxbd0&usqp=CAU"
      alt="logo"
    />
  </a>
);
function Header() {
  const {user} = useContext(UserContext);
  console.log(user.user)
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
         <span>Hi {user.user}</span> 
        </ul>
      </div>
    </div>
  );
}

export default Header;
