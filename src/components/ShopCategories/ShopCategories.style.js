import styled from "styled-components";

export const ShopCategoriesContainer = styled.div`
  width: 100vw;
  background-color: #fff;
  position: fixed;
  z-index: 1;
  transform: ${({ shopCategoriesOpen }) =>
    shopCategoriesOpen ? "translateY(0)" : "translateY(-100%)"};
  transition: transform 0.3s ease-in-out;
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
