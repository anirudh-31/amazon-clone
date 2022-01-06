import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./Categories.css";

function Categories() {
  return (
    <div className="categories">
      <div className="category category-all">
        <MenuIcon className="categories_menu" />
        <span className="category__text category__all">All</span>
      </div>
      <div className="category">
        <span className="category__text">Mobiles</span>
      </div>
      <div className="category">
        <span className="category__text">Best Sellers</span>
      </div>
      <div className="category">
        <span className="category__text">Electronics</span>
      </div>
      <div className="category">
        <span className="category__text">Fashion</span>
      </div>
      <div className="category">
        <span className="category__text">Customer Service</span>
      </div>
      <div className="category">
        <span className="category__text">Prime</span>
      </div>
      <div className="category">
        <span className="category__text">Home & Kitchen</span>
      </div>
      <div className="category">
        <span className="category__text">Amazon Pay</span>
      </div>
      <div className="category">
        <span className="category__text">Computers</span>
      </div>
      <div className="category">
        <span className="category__text">Todays Deals</span>
      </div>
      <div className="category">
        <span className="category__text">New Releases</span>
      </div>
      <div className="category">
        <span className="category__text">Toys & Games</span>
      </div>
      <div className="category">
        <span className="category__text">Books</span>
      </div>
      <div className="category">
        <span className="category__text">Coupons</span>
      </div>
    </div>
  );
}

export default Categories;
