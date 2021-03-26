import styled from "styled-components";

export const CheckoutContentContainer = styled.div`
  height: auto;
  background: linear-gradient(90deg, #ffff 50%, #ededed 50%);
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 3%;
  & > * {
    width: 50%;
  }
`;

export const CartProductsSection = styled.div`
  padding-right: 20%;
  padding-left: 3%;
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
  border-top: 1px solid rgba(166, 166, 166, 0.34);
  border-bottom: 1px solid rgba(166, 166, 166, 0.34);
  padding: 30px 0;
  margin: 15px 0;
  input {
    width: 78%;
    padding: 15px;
    height: 50px;
  }
`;

export const PriceCalcSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CheckoutPageButton = styled.button`
  cursor: pointer;
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 3px;
  color: white;
  font-weight: 500;
  padding: 15px 25px;
`;
