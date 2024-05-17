import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Navbar.css";
import pic from "./NewTux.png"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="topbarContainer">

        <div className="topbarLeft">
          <img src={pic} title="profile pic" alt="profile pic" className="topbarImg" />
            <div className={`topbarLinks ${menuOpen ? "showMenu" : ""}`}>
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
          <button className="menuButton" onClick={toggleMenu}>
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

      </div>

    </div>
  );
}

export default Navbar;
