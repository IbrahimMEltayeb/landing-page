import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <img src="./NewTux.png" alt="profile pic" className="topbarImg" />
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <FavoriteIcon />
              <span className="topbarIconBadge">المفضلة</span>
            </div>
            <div className="topbarIconItem">
              <ShoppingCartIcon />
              <span className="topbarIconBadge">سلة التسوق</span>
            </div>
          </div>
          <div className="topbarLinks">
            <span className="topbarLink">الرئيسية</span>
            <span className="topbarLink">طلبياتى</span>
          </div>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <SearchIcon className="searchIcon" />
            <input
              placeholder="ابحث عن اى منتج تريده"
              className="searchInput"
            />
          </div>
        </div>
        <div className="topbarRight">
          <span className="logo">اللوجو</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
