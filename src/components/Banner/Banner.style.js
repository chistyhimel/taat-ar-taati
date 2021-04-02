import styled from "styled-components";

export const BannerContainer = styled.div`
  width: 100vw;
  height: 65vw;
  @keyframes slideInFromLeft {
    0% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }

  img {
    width: 100%;
    /* height: 100%; */
    /* object-fit: cover; */
    vertical-align: bottom;
    transition: all 0.5s;
    animation: 1s ease-out 0s 1 slideInFromLeft;
  }
`;
