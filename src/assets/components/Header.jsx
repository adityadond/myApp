import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./utils/UserContext";
import {useSelector} from "react-redux"

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
  const cart =useSelector(store=>store.cart.items)
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
            <sup> {cart.length} </sup>
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
