import "./header.scss"

import search from "../img/search.svg"

function Header() {
    return (
      <header className="header">
        <div className="header__content max-width">
          <input className="header__input"/>
          <img className="header__icon" src={search} alt="search icon"/>
        </div>
      </header>
    );
  }
  
  export default Header;
  