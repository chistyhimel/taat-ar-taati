import React, { useState } from "react";
import { Container } from "../../constants/container";
import {
  NavBarContainer,
  NavBarContainerWrap,
  NavbarIconsContainer,
  NavItemsContainer,
} from "./Navbar.style";
import logo from "../../assets/images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../SearchBar/SearchBar.component";
import ShopCategories from "../ShopCategories/ShopCategories.component";
import CartSidebar from "../CartSidebar/CartSidebar.component";
import { useHistory } from "react-router";

const Navbar = () => {
  const history = useHistory();
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const [shopCategoriesOpen, setShopCategoriesOpen] = useState(false);
  const [cartSidebarOpen, setCartSidebarState] = useState(false);
  return (
    <>
      <NavBarContainerWrap>
        <Container>
          <NavBarContainer>
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
