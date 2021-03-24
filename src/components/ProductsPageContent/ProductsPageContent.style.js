import styled from "styled-components";

export const ProductsPageContentContainer = styled.div`
  h1 {
    font-size: 24px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    padding: 3% 0;
  }
`;
export const ProductLayoutCustomize = styled.div`
  border-bottom: 1px solid #ebebeb;
  border-top: 1px solid #ebebeb;
  display: flex;
  justify-content: space-between;
  .left__section {
    border-right: 1px solid #ebebeb;
    cursor: pointer;
  }
  .right__section {
    display: flex;
    cursor: pointer;
  }
`;

export const LayoutCustomizeIcon = styled.div`
  height: 100%;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;

  & > * {
    margin: 0 0 0 15px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ProductCustomizeText = styled.p`
  padding: 18px 45px;
  border-left: 1px solid #ebebeb;
  font-size: 15px;
`;

export const ProductsContainer = styled.div`
  margin: 5% 0;
  display: grid;
  grid-template-columns: ${({ changeLayout }) =>
    changeLayout ? "repeat(2, 1fr)" : "repeat(4, 1fr)"};
  grid-gap: 2rem;
  /* grid-template-columns: repeat(auto-fit,minmax(12rem,1fr)); */
`;
