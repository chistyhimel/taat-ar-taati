import styled from "styled-components";

export const CheckoutContentContainer = styled.div`
  height: 100vh;
  background: linear-gradient(90deg, #ffff 50%, #ededed 50%);
`;

export const CartProductsSection = styled.div`
  width: 30%;
  .cart_product {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;

    & > :nth-child(2) {
      width: 50%;
    }
    img {
      width: 64px;
      height: 64px;
      object-fit: contain;
    }
    p {
    }
  }
`;

export const CuponCodeSection = styled.div`
  display: flex;
  justify-content: space-between;
  height: 46px;
  input {
    width: 72%;
  }
  span {
    width: 25%;

    div {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
`;

export const PriceCalcSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
