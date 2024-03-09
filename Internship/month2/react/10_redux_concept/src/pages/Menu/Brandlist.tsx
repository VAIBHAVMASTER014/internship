import React from "react";
import { NavLink } from "react-router-dom";

// imporeted files
import { useAppSelector, useAppDispatch } from "../../redux/foodSlice";
import { brandDataFilterbyTitle } from "../../redux/brandSlice";

const Brandlist = () => {
  const dispatch = useAppDispatch();
  const BrandData = useAppSelector((state) => state.brand.allData);

  const brandLogoHandler = (title: string) => {
    dispatch(brandDataFilterbyTitle(title));
  };
  const BrandLogo = BrandData.map((logo, index) => {
    return (
      <NavLink to="/menu/brand" key={index}>
        <div
          className="list-item"
          onClick={() => brandLogoHandler(logo.brandtitle)}
        >
          <img src={`/images/${logo.image}`} alt="" />
          <span>{logo.brandtitle}</span>
        </div>
      </NavLink>
    );
  });
  return <div className="brand-list">{BrandLogo}</div>;
};

export default Brandlist;
