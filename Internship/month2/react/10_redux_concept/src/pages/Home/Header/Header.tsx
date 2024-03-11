import React, { ChangeEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

// imported files
import { useAppDispatch } from "../../../redux/foodSlice";
import { brandDataFilterbyTitle } from "../../../redux/brandSlice";

// css files
import "./Header.css";

const Header = () => {
  const [input, setInput] = useState("");

  const brandList = ["La Pino'z Pizza", "KFC", "Starbucks", "Chipotle"];
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submitHandler = () => {
    dispatch(brandDataFilterbyTitle(input));
    console.log(dispatch(brandDataFilterbyTitle(input)));
    navigate("/menu/brand");
  };
  const onBrandClick = (title: string) => {
    dispatch(brandDataFilterbyTitle(title));
    navigate("/menu/brand");
  };
  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <div className="banner">
      <div className="box">
        <div className="banner-content">
          <h2>NOODLETOWN</h2>
          <p>Discover best food around you</p>
          <div className="banner-search">
            <select title="city" name="city" id="city">
              <option value="surat">Surat</option>
              <option value="valsad">Valsad</option>
              <option value="navsari">Navsari</option>
              <option value="Ahemdabad">Ahemdabad</option>
            </select>
            <hr />
            <input
              onChange={inputHandler}
              value={input}
              type="text"
              placeholder="Search for restaurant,cuisine,place"
            />

            <button
              disabled={input.length <= 0}
              title="submit"
              type="button"
              onClick={submitHandler}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <div className={input ? " Brands" : "invisible"}>
            {brandList.map((brand, index) => (
              <div key={index} className="header-list" onClick={() => onBrandClick(brand)}>
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
