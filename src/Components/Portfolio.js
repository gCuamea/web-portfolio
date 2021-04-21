import React from 'react';
import styled, { keyframes } from 'styled-components';

import twotterVid from '../assets/twottervid.mkv';
import notoVid from '../assets/notovid.mkv';
import doggoVid from '../assets/doggovid.mkv';
import portfolioVid from '../assets/portfoliovid.mkv';

export const Portfolio = () => {
  return (
    <PortfolioContainer>
      <PortfolioIntro>
        <PortfolioIntroTop>
          <PortfolioIntroYear>20</PortfolioIntroYear>
          <PortfolioIntroWord>
            Folio <span>Proyectos seleccionados</span>
          </PortfolioIntroWord>
        </PortfolioIntroTop>
      </PortfolioIntro>
      <PortfolioProjects>
        <Project>
          <a cursor-class="arrow" href="/#">
            <ProjectTitle>Twotter</ProjectTitle>
            <ProjectInfo>
              <ProjectPlatform>Website - App</ProjectPlatform>
              <ProjectFrameworks>
                ReactJS - NodeJS / Express - MongoDB - JWT
              </ProjectFrameworks>
            </ProjectInfo>
            <ProjectVideo className="pvideo">
              <video src={twotterVid} muted autoPlay={true} loop></video>
            </ProjectVideo>
          </a>
        </Project>

        <Project cursor-class="arrow">
          <a cursor-class="arrow" href="/#">
            <ProjectTitle>Noto</ProjectTitle>
            <ProjectInfo>
              <ProjectPlatform>Website - App</ProjectPlatform>
              <ProjectFrameworks>ReactJS - Firebase - JWT</ProjectFrameworks>
            </ProjectInfo>
            <ProjectVideo className="pvideo">
              <video src={notoVid} muted autoPlay={true} loop></video>
            </ProjectVideo>
          </a>
        </Project>
        <Project cursor-class="arrow">
          <a cursor-class="arrow" href="/#">
            <ProjectTitle className="ptitle">Doggocare</ProjectTitle>
            <ProjectInfo>
              <ProjectPlatform>Landing Website</ProjectPlatform>
              <ProjectFrameworks>Bootstrap 5</ProjectFrameworks>
            </ProjectInfo>
            <ProjectVideo className="pvideo">
              <video src={doggoVid} muted autoPlay={true} loop></video>
            </ProjectVideo>
          </a>
        </Project>
        <Project>
          <a cursor-class="arrow" href="/#">
            <ProjectTitle>Portfolio</ProjectTitle>
            <ProjectInfo>
              <ProjectPlatform>Website</ProjectPlatform>
              <ProjectFrameworks>ReactJS - GSAP</ProjectFrameworks>
            </ProjectInfo>
            <ProjectVideo className="pvideo">
              <video src={portfolioVid} muted autoPlay={true} loop></video>
            </ProjectVideo>
          </a>
        </Project>
      </PortfolioProjects>
    </PortfolioContainer>
  );
};

const PortfolioContainer = styled.div`
  margin: 0 auto;
  display: flex;
  width: 80%;
  flex-flow: column;
`;

// ? Intro (top title)
const PortfolioIntro = styled.div`
  font-size: 4vw;
  display: flex;
  width: 100%;
  justify-content: center;

  @media (max-width: 920px) {
    font-size: 6vw;
  }

  @media (max-width: 600px) {
    font-size: 8vw;
  }
`;

const PortfolioIntroTop = styled.h1`
  font-weight: 600;
`;

const PortfolioIntroYear = styled.span`
  color: var(--color-primary-dark);
  margin-right: 6vw;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    background-color: var(--color-primary);
    width: 6vw;
    height: 0.4vw;
    top: 48%;
    left: 75%;

    @media (max-width: 920px) {
      height: 1vw;
      top: 47%;
    }
  }
`;

const PortfolioIntroWord = styled.span`
  position: relative;
  text-transform: uppercase;

  > span {
    text-align: end;
    text-transform: none;
    font-size: 1.4vw;
    color: var(--color-primary-dark);
    display: block;
    margin-top: -2vw;
    margin-right: 0.6rem;

    @media (max-width: 920px) {
      font-size: 2.3vw;
    }

    @media (max-width: 600px) {
      font-size: 4vw;
    }
  }
`;
////////////////////////////////////// ?

// ? Projects

const videoZoom = keyframes`
  0% {
    transform: scale(1.2);
  }
  
  100% {
    transform: scale(1);
  }
`;

const PortfolioProjects = styled.div`
  width: 100%;
  margin: var(--margin-side-projects);
  margin-bottom: 7vw;
`;

const Project = styled.div`
  display: flex;
  flex-flow: column;
  position: relative;
  /* height: 20vw; */

  justify-content: center;
  border-bottom: 1px solid var(--color-primary-dark);

  a,
  a:hover,
  a:active,
  a:visited {
    color: white;
    text-decoration: none;
    cursor: pointer !important;
  }

  &:hover {
    .pvideo {
      &::after {
        transform: translate(-40vw, 40vw);
      }
      > video {
        animation: ${videoZoom} 1.3s ease-out;
      }
    }
  }

  @media (max-width: 920px) {
    height: 30vw;
  }

  @media (max-width: 600px) {
    height: 40vw;
  }
`;

const ProjectTitle = styled.h2`
  padding-top: 7vw;
  font-family: 'Fraunces', sans-serif;
  font-size: 5vw;

  @media (max-width: 920px) {
    font-size: 7vw;
  }

  @media (max-width: 600px) {
    font-size: 9vw;
  }
`;
const ProjectInfo = styled.div`
  font-size: 1.5vw;
  line-height: 1.4;

  text-transform: uppercase;

  @media (max-width: 920px) {
    font-size: 2.2vw;
  }

  @media (max-width: 600px) {
    font-size: 3vw;
  }
`;
const ProjectPlatform = styled.p`
  font-weight: 600;
`;
const ProjectFrameworks = styled.p`
  color: var(--color-primary-dark);
  font-weight: bolder;
  padding-bottom: 3vw;
`;

const ProjectVideo = styled.div`
  position: absolute;
  right: 3%;
  top: 50%;

  height: 90%;
  width: 30vw;

  transform: translateY(-50%);

  display: flex;
  align-items: center;

  overflow: hidden;

  /* 1 */
  z-index: 4;
  overflow: hidden;

  > video {
    border-radius: 3px;
    width: 100%; /* 100 * 16 / 9 */
  }

  &:hover {
    &::after {
      transform: translate(-40vw, 40vw);
    }
  }

  &::after {
    content: '';
    height: 70vw;
    width: 70vw;

    background-color: var(--color-background);

    position: absolute;
    top: -30vw;
    left: -2vw;

    clip-path: polygon(9% 0, 100% 55%, 100% 100%, 0 100%, 0 0);

    z-index: 5;

    transition: all 1.5s ease;
  }
`;
