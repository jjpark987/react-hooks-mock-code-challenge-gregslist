import React from "react";
import Search from "./Search";

function Header({ onHandleSearch }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onHandleSearch={onHandleSearch} />
    </header>
  );
}

export default Header;
