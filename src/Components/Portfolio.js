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
        <Project>
          <ProjectTitle>Twotter</ProjectTitle>
          <ProjectInfo>
            <ProjectPlatform>Website - App</ProjectPlatform>
            <ProjectFrameworks>
              ReactJS - NodeJS / Express - MongoDB - JWT
            </ProjectFrameworks>
          </ProjectInfo>
        </Project>
        <Project>
          <ProjectTitle>Noto</ProjectTitle>
          <ProjectInfo>
            <ProjectPlatform>Website - App</ProjectPlatform>
            <ProjectFrameworks>ReactJS - Firebase</ProjectFrameworks>
          </ProjectInfo>
        </Project>
        <Project>
          <ProjectTitle>Twotter</ProjectTitle>
          <ProjectInfo>
            <ProjectPlatform>Website - App</ProjectPlatform>
            <ProjectFrameworks>
              ReactJS - NodeJS / Express - MongoDB - JWT
            </ProjectFrameworks>
          </ProjectInfo>
        </Project>
        <Project>
          <ProjectTitle>Portfolio</ProjectTitle>
          <ProjectInfo>
            <ProjectPlatform>Website</ProjectPlatform>
            <ProjectFrameworks>ReactJS - GSAP</ProjectFrameworks>
          </ProjectInfo>
        </Project>
      </PortfolioProjects>
    </PortfolioContainer>
  );
};

const PortfolioContainer = styled.div`
  margin: 8rem auto 0;
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
  }
`;
////////////////////////////////////// ?

// ? Projects

const PortfolioProjects = styled.div`
  width: 100%;
  margin: var(--margin-side-projects);
  margin-bottom: 19vw;
`;

const Project = styled.div`
  display: flex;
  flex-flow: column;
  height: 24vw;
  justify-content: center;
  /* padding-bottom: 5vw; */
  border-bottom: 1px solid var(--color-primary-dark);
`;

const ProjectTitle = styled.h2`
  margin-top: 3vw;
  font-family: 'Fraunces', sans-serif;
  font-size: 5vw;
`;
const ProjectInfo = styled.div`
  font-size: 1.5vw;
  line-height: 1.4;

  text-transform: uppercase;
`;
const ProjectPlatform = styled.p`
  font-weight: 600;
`;
const ProjectFrameworks = styled.p`
  color: var(--color-primary-dark);
  font-weight: bolder;
`;
