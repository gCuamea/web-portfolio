import React from 'react';
import styled from 'styled-components';
import video from '../assets/emojifooter3.mp4';

export const Footer = () => {
  const handleSendMail = () => {
    window.open('mailto:gcuamea09@gmail.com?subject=Asunto&body=');
  };

  return (
    <FooterContainer>
      <h2>Contáctame</h2>
      <h2 onClick={handleSendMail}>gcuamea09@gmail.com</h2>
      <video src={video} muted autoPlay={true} loop></video>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  margin: ${(props) => props.theme.marginSideDefault};
  font-weight: 300;
  position: relative;
  height: 40vw;

  display: flex;
  justify-content: center;
  flex-flow: column;

  > video {
    position: absolute;
    right: -5vw;
    bottom: 0rem;
    z-index: 2;

    width: 40vw;

    @media (max-width: 768px) {
      width: 45vw;
    }
  }

  > h2 {
    &:first-child {
      font-size: 3vw;
      color: var(--color-primary-dark);
    }

    &:nth-child(2) {
      font-weight: 400;
      font-size: 6vw;
      color: transparent;
      /* color: var(--color-background); */
      /* -webkit-text-stroke: 0.18vw white; */
      -webkit-text-stroke: 1px white;
      /* font-smooth: 2em; */
      -webkit-font-smoothing: antialiased;

      transition: all 0.2s ease;
      z-index: 10;
      position: relative;
      cursor: pointer;

      &:hover {
        color: white;
      }
    }
  }
`;
