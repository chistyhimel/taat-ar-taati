import styled from "styled-components";

export const BannerWrapper = styled.div`
  .slick-active {
    @keyframes slideInFromLeft {
      0% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
      }

      to {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
      }
    }

    h1 {
      opacity: 0;

      animation: fadeInUp 1s ease-in-out 0s forwards;
    }

    img {
      transition: all 0.5s;
      animation: 1s ease-out 0s 1 slideInFromLeft;
    }
  }
`;

export const BannerContainer = styled.div`
  width: 100vw;
  overflow: hidden;
  img {
    width: 100%;
    /* height: 100%; */
    /* object-fit: cover; */
    vertical-align: bottom;
  }
`;
