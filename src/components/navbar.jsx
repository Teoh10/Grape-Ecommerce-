import React from "react";
import {Link} from "react-router-dom";
import {ShoppingCart} from "phosphor-react";
import "./navbar.css";


function searchbar(){
    return (
        <form  className="search-bar">
        <input type="text" placeholder="Search" />
        <button disabled>
        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
        </button>
      </form>)
}
export const Navbar = () => {
    return (
    <div className="navbar">
        <div className="left-links">
            <Link to="/"> Shop </Link>
            {searchbar()}
        </div>
        <div className="right-links">
        <Link to="/sell"> Sell Item </Link>
            <Link to="/cart">
                <ShoppingCart size={32} />
            </Link>
        </div>
    </div>);
}