import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/images/banner-images/banner-img1.png";
import img2 from "../../assets/images/banner-images/banner-img2.jpg";
import img3 from "../../assets/images/banner-images/banner-img3.jpg";
import { BannerContainer, BannerWrapper } from "./Banner.style";

const Banner = () => {
  const settings = {
    dots: false,
    pauseOnHover: false,
    fade: true,
    infinite: true,
    autoPlaySpeed: 3500,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <BannerWrapper>
        <Slider {...settings}>
          <BannerContainer>
            <img src={img1} alt="" />
          </BannerContainer>
          <BannerContainer>
            <img src={img2} alt="" />
          </BannerContainer>
          <BannerContainer>
            <img src={img3} alt="" />
          </BannerContainer>
        </Slider>
      </BannerWrapper>
    </>
  );
};

export default Banner;
