import React, { useState } from "react";
import { Container } from "../../constants/container";
import {
  NavBarContainer,
  NavbarIconsContainer,
  NavItemsContainer,
} from "./Navbar.style";
import logo from "../../assets/images/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { SearchBarContainer } from "../SearchBar/SearchBar.style";
import SearchBar from "../SearchBar/SearchBar.component";
import ShopCategories from "../ShopCategories/ShopCategories.component";
import CartSidebar from "../CartSidebar/CartSidebar.component";

const Navbar = () => {
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const [shopCategoriesOpen, setShopCategoriesOpen] = useState(false);
  const [cartSidebarOpen, setCartSidebarState] = useState(false);
  return (
    <>
      <NavBarContainer>
        <Container>
          <img src={logo} alt="" />
          <NavbarIconsContainer>
            <FontAwesomeIcon icon={faUser} />
            <FontAwesomeIcon
              icon={faSearch}
              onClick={() => setSearchBarOpen(!searchBarOpen)}
            />
            <FontAwesomeIcon
              icon={faShoppingBag}
              onClick={() => setCartSidebarState(true)}
            />
          </NavbarIconsContainer>
          <NavItemsContainer>
            <p>Home</p>
            <p onMouseOver={() => setShopCategoriesOpen(true)}>Shop</p>
            <p>About Us</p>
            <p>Contact Us</p>
          </NavItemsContainer>
        </Container>
      </NavBarContainer>
      <SearchBar searchBarState={[searchBarOpen, setSearchBarOpen]} />
      <ShopCategories
        shopCategoriesState={[shopCategoriesOpen, setShopCategoriesOpen]}
      />
      <CartSidebar sidebarState={[cartSidebarOpen, setCartSidebarState]} />
    </>
  );
};

export default Navbar;
