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
    </PortfolioContainer>
  );
};

const PortfolioContainer = styled.div`
  margin: 5rem auto 0;
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
  margin-bottom: 7vw;
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
  }
`;

const PortfolioIntroWord = styled.span`
  position: relative;
  text-transform: uppercase;

  > span {
    text-align: end;
    text-transform: none;
    font-size: 1.4vw !important;
    color: var(--color-primary-dark);
    display: block;
    font-size: 1vw;
    margin-top: -2vw;
  }
`;
