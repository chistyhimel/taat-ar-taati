import React from "react";
import { Container } from "../../constants/container";
import {
  ShopCategoriesContainer,
  ShopCategoriesContent,
} from "./ShopCategories.style";

const ShopCategories = ({ shopCategoriesState }) => {
  const [shopCategoriesOpen, setShopCategoriesOpen] = shopCategoriesState;
  return (
    <ShopCategoriesContainer
      shopCategoriesOpen={shopCategoriesOpen}
      onMouseLeave={() => setShopCategoriesOpen(false)}
    >
      <Container>
        <ShopCategoriesContent>
          <div>
            <small>Fabrics by the meter</small>
            <br />
            <br />
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
          </div>
          <div>
            <small>Fabrics by the meter</small>
            <br />
            <br />
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
          </div>
          <div>
            <small>Fabrics by the meter</small>
            <br />
            <br />
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
          </div>
          <div>
            <small>Fabrics by the meter</small>
            <br />
            <br />
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
          </div>
          <div>
            <small>Fabrics by the meter</small>
            <br />
            <br />
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
          </div>
          <div>
            <small>Fabrics by the meter</small>
            <br />
            <br />
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
          </div>
        </ShopCategoriesContent>
      </Container>
    </ShopCategoriesContainer>
  );
};

export default ShopCategories;
