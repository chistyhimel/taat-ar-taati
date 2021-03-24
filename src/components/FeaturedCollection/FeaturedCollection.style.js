import styled from "styled-components";

export const FeaturedCollectionContainer = styled.div`
  text-align: center;
  margin: 4% 0;
  color: ${({ theme }) => theme.colors.primary};
  .featured__collection {
    display: flex;
    justify-content: space-between;
    width: 250px;
    font-size: 24px;
    font-weight: 200;
    margin: 2% auto;

    p {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.primary};
      &::after {
        content: "";
        display: block;
        margin: 0 auto;
        width: 0;
        height: 1px;
        background: ${({ theme }) => theme.colors.primary};
        transition: width 0.3s;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }
`;

export const FeaturedCollectionCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100;
  button {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: none;
    outline: none;
    box-shadow: 0 2px 10px rgb(54 54 54 / 15%);
    background-color: transparent;
    font-size: 18px;
  }

  .product__container {
    width: 89vw;
    margin: 0 auto;
    overflow: hidden;

    .slick-slide > div {
      margin: 0 20px;
    }
    .slick-list {
      margin: 0 -20px;
    }
  }
`;
