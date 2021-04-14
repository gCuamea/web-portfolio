import React from 'react';
import styled from 'styled-components';

export const Navbar = () => {
  return (
    <Header className="m-header">
      <LeftContainer className="m-header__temp-sign">
        <p className="uppercase">Website temporal</p>
      </LeftContainer>
      <RightContainer className="m-header__quick-contact">
        <a href="www.google.com" className="uppercase link-format contact-link">
          Mandame un email
        </a>
      </RightContainer>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  font-size: 1.8vw;
  padding-top: 2vw;

  margin: var(--margin-side-default);
  margin-bottom: 5.5vw;
`;

const LeftContainer = styled.div`
  color: var(--color-primary-dark);
  cursor: default;
  font-weight: bolder;
`;

const RightContainer = styled.div`
  color: var(--color-primary-semidark);
  position: relative;
  font-weight: 500;

  .contact-link {
    position: relative;
  }

  /* border-bottom: 1px solid var(--color-primary-semidark); */
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 110%;
    height: 100%;
    padding: 1rem;
    border: 2px solid transparent;
    transform: translateX(-0.95vw);

    transition: all 0.4s;
    transition-timing-function: cubic-bezier(0, 0, 0, 1.04);
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 56%;
    padding-top: 0.3rem;
    border-bottom: 1px solid var(--color-orange-primary);
    transition: all 1s;
    transition-timing-function: cubic-bezier(0, 0, 0, 1.04);
  }

  &:hover,
  &:active {
    &::before {
      border: 2px solid white;
    }

    &::after {
      width: 100%;
      margin-top: -1.8vw;
      opacity: 0;
    }
  }
`;