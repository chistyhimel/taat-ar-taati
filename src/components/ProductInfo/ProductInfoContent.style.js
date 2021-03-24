import styled from "styled-components";

export const ProductInfoContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 80vw;
  height: auto;
  margin: 5% auto;

  & > * {
  }
`;

export const ProductImgContainer = styled.div`
  width: 50%;

  .image-gallery-thumbnails-wrapper.left .image-gallery-thumbnails,
  .image-gallery-thumbnails-wrapper.right .image-gallery-thumbnails {
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }
  }

  .image-gallery-left-nav .image-gallery-svg,
  .image-gallery-right-nav .image-gallery-svg {
    width: 60px;
    height: 60px;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .image-gallery-thumbnail.active,
  .image-gallery-thumbnail:hover,
  .image-gallery-thumbnail:focus {
    outline: none;
    border: 4px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const ProductsDetailsContainer = styled.div`
  width: 40%;
  height: fit-content;
  position: sticky;
  bottom: 0;
  overflow-y: auto;
  color: ${({ theme }) => theme.colors.primary};
  div {
    width: 100%;
    text-align: center;
  }
  h1 {
    font-size: 22px;
    font-weight: 400;
  }
  small {
    font-size: 14px;
    color: #4d4646;
  }
  p {
  }
  h2 {
    font-size: 19px;
    font-weight: 400;
  }
  h4 {
  }
  h6 {
    font-size: 17px;
  }
  li {
    list-style-position: inside;
    font-size: 17px;
    font-weight: 400;
  }
`;

export const SizeChartContainer = styled.div`
  h2 {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    span {
      display: block;
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    span {
      cursor: pointer;
      border: 1px solid lightgray;
      padding: 10px;
    }
  }
`;
