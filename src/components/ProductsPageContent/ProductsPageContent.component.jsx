import { faTh, faThLarge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Container } from "../../constants/container";
import ProductCard from "../ProductCard/ProductCard.component";
import {
  LayoutCustomizeIcon,
  ProductCustomizeText,
  ProductLayoutCustomize,
  ProductsContainer,
  ProductsPageContentContainer,
} from "./ProductsPageContent.style";

const ProductsPageContent = () => {
  const [changeLayout, setChangeLayout] = useState(false);

  console.log(changeLayout);
  return (
    <>
      <ProductsPageContentContainer>
        <h1>Products</h1>
        <ProductLayoutCustomize>
          <div className="left__section">
            <LayoutCustomizeIcon>
              <FontAwesomeIcon
                icon={faThLarge}
                onClick={() => setChangeLayout(true)}
              />
              <FontAwesomeIcon
                icon={faTh}
                onClick={() => setChangeLayout(false)}
              />
            </LayoutCustomizeIcon>
          </div>
          <div className="right__section">
            <ProductCustomizeText>Sort</ProductCustomizeText>
            <ProductCustomizeText>Filter</ProductCustomizeText>
          </div>
        </ProductLayoutCustomize>

        <Container>
          <ProductsContainer changeLayout={changeLayout}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </ProductsContainer>
        </Container>
      </ProductsPageContentContainer>
    </>
  );
};

export default ProductsPageContent;
