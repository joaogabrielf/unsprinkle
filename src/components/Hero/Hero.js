import React from "react";
import styled from "styled-components/macro";

const devicePixelRatio = [1, 2, 3];
const updatedSrc = devicePixelRatio.map(
  (ratio) =>
    `/images/hero-img${ratio > 1 ? "@" + ratio + "x" : ""}.avif ${ratio}x`
);

const Hero = () => {
  return (
    <Wrapper>
      <picture>
        <source srcSet={updatedSrc} type='image/avif' />
        <HeroImage
          src='/images/hero-img.jpg'
          alt='Beautiful cat staring at you.'
        />
      </picture>
      <Swoop src='/swoop.svg' alt='' />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: hsl(0deg 0% 1%);
`;

const HeroImage = styled.img`
  display: block;
  width: 500px;
  height: 500px;
  max-height: 100%;
`;

const Swoop = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  /*
    Overhang by a couple px to prevent any pixel-rounding
    display issues
  */
  bottom: -2px;
  width: 100%;
`;

export default Hero;
