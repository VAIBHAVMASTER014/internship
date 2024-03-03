import React from "react";

// css files
import './Header.css'

const Header = () => {
  return (
    <div className="banner">
       <div className="box">

      <div className="banner-content">
        <h2>NOODLETOWN</h2>
        <p>Discover best food around you</p>
        <div className="banner-search">
          <select name="city" id="city">
            <option value="surat">Surat</option>
            <option value="valsad">Valsad</option>
            <option value="navsari">Navsari</option>
            <option value="Ahemdabad">Ahemdabad</option>
          </select>
          <hr />
          <input
            type="text"
            placeholder="Search for restaurant,cuisine,place"
          />
        </div>
      </div>
       </div>
    </div>
  );
};

export default Header;
