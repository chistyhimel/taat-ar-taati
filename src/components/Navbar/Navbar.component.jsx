import React, { useState } from "react";
import { Container } from "../../constants/container";
import {
  NavBarContainer,
  NavBarContainerWrap,
  NavbarIconsContainer,
  NavItemsContainer,
} from "./Navbar.style";
import logo from "../../assets/images/logo.svg";
import SearchBar from "../SearchBar/SearchBar.component";
import ShopCategories from "../ShopCategories/ShopCategories.component";
import CartSidebar from "../CartSidebar/CartSidebar.component";
import { useHistory, useLocation } from "react-router";
import searchIcon from "../../assets/icons/search.png";
import personIcon from "../../assets/icons/person.png";
import shoppingIcon from "../../assets/icons/shopping.png";

const Navbar = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const [shopCategoriesOpen, setShopCategoriesOpen] = useState(false);
  const [cartSidebarOpen, setCartSidebarState] = useState(false);
  console.log(pathname);
  return pathname === "/checkout" ? null : (
    <>
      <NavBarContainerWrap>
        <Container>
          <NavBarContainer>
            <img src={logo} alt="" />

            <NavbarIconsContainer>
              <img src={personIcon} alt="" />
              <img
                src={searchIcon}
                alt=""
                onClick={() => setSearchBarOpen(!searchBarOpen)}
              />
              <img
                src={shoppingIcon}
                alt=""
                onClick={() => setCartSidebarState(true)}
              />
            </NavbarIconsContainer>

            <NavItemsContainer>
              <p onClick={() => history.push("/")}>Home</p>
              <p onMouseOver={() => setShopCategoriesOpen(true)}>Shop</p>
              <p>About Us</p>
              <p>Contact Us</p>
            </NavItemsContainer>
          </NavBarContainer>
        </Container>
      </NavBarContainerWrap>

      {/* ======================== */}

      <SearchBar searchBarState={[searchBarOpen, setSearchBarOpen]} />
      <ShopCategories
        shopCategoriesState={[shopCategoriesOpen, setShopCategoriesOpen]}
      />
      <CartSidebar sidebarState={[cartSidebarOpen, setCartSidebarState]} />
    </>
  );
};

export default Navbar;
