import React from "react";

const Header = ({header_content})=>{
  return (
    <header className="App-header text-center py-8 bg-cover bg-center text-white">
      <h1 className="text-5xl font-bolder">
        {header_content}
      </h1>
    </header>
    )
};

export default Header;