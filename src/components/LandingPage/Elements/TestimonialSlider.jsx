import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import TestimonialBox from "../Elements/TestimonialBox";

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="When everything seems to be going against you, remember that the airplane takes off against the wind, not with it"
            author="Henry Ford"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Motivation is what gets you started. Habit is what keeps you going."
            author="Jim Rohn, entrepreneur, author and motivational speaker"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Challenges are gifts that force us to search for a new center of gravity. Don’t fight them. Just find a new way to stand."
            author="Oprah Winfrey"
          />
        </LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
