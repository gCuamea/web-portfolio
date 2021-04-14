import React from 'react';
import styled from 'styled-components';

export const Navbar = () => {
  return (
    <Header>
      <LeftContainer>
        <p className="uppercase">Website temporal</p>
      </LeftContainer>
      <RightContainer>
        <ContactLink href="www.google.com">Mandame un email</ContactLink>
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
  position: relative;
  font-weight: 500;
`;

const ContactLink = styled.a`
  position: relative;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-primary-semidark);

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
