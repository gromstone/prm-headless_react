import React from "react";
import Nav from "../../Components/Navigation/Navigation.js";

const Header = () => {
  return (
    <div className='header row'>
      <div className='logo col'></div>
      <Nav/>
      <div className='action col'></div>
    </div>
  )
};
export default Header;
