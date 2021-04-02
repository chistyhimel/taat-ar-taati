import styled from "styled-components";

export const ShopCategoriesContainer = styled.div`
  width: 100vw;
  background-color: #fff;
  position: fixed;
  z-index: 5;
  border-top: 1px solid #ebebeb;
  display: ${({ shopCategoriesOpen }) =>
    shopCategoriesOpen ? "block" : "none"};
`;

export const ShopCategoriesContent = styled.div`
  padding: 50px 0;
  display: flex;
  justify-content: space-around;
  div {
    small {
    }
    p {
      color: ${({ theme }) => theme.colors.primary};
      margin-bottom: 10px;
    }
  }
`;
