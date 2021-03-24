import styled from "styled-components";

export const BannerContainer = styled.div`
  width: 100vw;
  height: 40vw;
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
    object-fit: cover;
    transition: all 0.5s;
    animation: 1s ease-out 0s 1 slideInFromLeft;
  }
`;
