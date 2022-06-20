import React, { useEffect } from "react";
import Styled from "styled-components";
import Parallax from "parallax-js";
import PropTypes from "prop-types";

import backgroundImage from "../images/background.jpg";

import textImage from "../images/text.png";
import astronautImage from "../images/astronaut.png";
import planet1Image from "../images/planet1.png";
import planet2Image from "../images/planet2.png";
import rocketImage from "../images/rocket.png";
import Title from "./Title";

const layers = [
  {
    name: "astronaut",
    image: astronautImage,
    dataDepth: "2"
  },
  {
    name: "planet1",
    image: planet1Image,
    dataDepth: "1"
  },
  {
    name: "planet2",
    image: planet2Image,
    dataDepth: "-1"
  },
  {
    name: "rocket",
    image: rocketImage,
    dataDepth: "0.5"
  }
];

const Container = Styled.div`
	width: 100%;
	height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
	overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ParallaxImagesContainer = ({ backgroundImage, layers }) => {
  useEffect(() => {
    const scene = document.getElementById("scene");
    new Parallax(scene);
  });

  return (
    <Container backgroundImage={backgroundImage}>
      <div id="scene">
        {layers.map((l, index) => (
          <img
            key={index}
            data-depth={l.dataDepth}
            src={l.image}
            alt={l.name}
          />
        ))}
            <Title />

      </div>
    </Container>
  );
};

ParallaxImagesContainer.propTypes = {
  backgroundImage: PropTypes.string,
  layers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      dataDepth: PropTypes.string
    })
  )
};

ParallaxImagesContainer.defaultProps = {
  backgroundImage: backgroundImage,
  layers: layers
};

export default ParallaxImagesContainer;
