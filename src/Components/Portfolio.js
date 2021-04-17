import React from 'react';
import styled from 'styled-components';

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
        {/* <div cursor-class="arrow" style={{ cursor: 'pointer' }}> */}
        <Project>
          <a cursor-class="arrow" href="/#">
            <ProjectTitle>Twotter</ProjectTitle>
            <ProjectInfo>
              <ProjectPlatform>Website - App</ProjectPlatform>
              <ProjectFrameworks>
                ReactJS - NodeJS / Express - MongoDB - JWT
              </ProjectFrameworks>
            </ProjectInfo>
          </a>
        </Project>
        {/* </div> */}
        <Project cursor-class="arrow">
          <a cursor-class="arrow" href="/#">
            <ProjectTitle>Noto</ProjectTitle>
            <ProjectInfo>
              <ProjectPlatform>Website - App</ProjectPlatform>
              <ProjectFrameworks>ReactJS - Firebase</ProjectFrameworks>
            </ProjectInfo>
          </a>
        </Project>
        <Project cursor-class="arrow">
          <a cursor-class="arrow" href="/#">
            <ProjectTitle>Twotter</ProjectTitle>
            <ProjectInfo>
              <ProjectPlatform>Website - App</ProjectPlatform>
              <ProjectFrameworks>
                ReactJS - NodeJS / Express - MongoDB - JWT
              </ProjectFrameworks>
            </ProjectInfo>
          </a>
        </Project>
        <Project>
          <a cursor-class="arrow" href="/#">
            <ProjectTitle>Portfolio</ProjectTitle>
            <ProjectInfo>
              <ProjectPlatform>Website</ProjectPlatform>
              <ProjectFrameworks>ReactJS - GSAP</ProjectFrameworks>
            </ProjectInfo>
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
  font-size: 3.3vw;
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

const PortfolioProjects = styled.div`
  width: 100%;
  margin: var(--margin-side-projects);
  margin-bottom: 7vw;
`;

const Project = styled.div`
  display: flex;
  flex-flow: column;
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

  @media (max-width: 920px) {
    height: 30vw;
  }

  @media (max-width: 600px) {
    height: 40vw;
  }
`;

const ProjectTitle = styled.h2`
  padding-top: 5vw;
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
