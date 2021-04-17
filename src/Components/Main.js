import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import profilePhoto from '../assets/profile-photo.png';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export const Main = () => {
  const TextAnimate1 = useRef(null);
  const TextAnimate2 = useRef(null);
  const TextAnimate3 = useRef(null);
  const TextAnimate4 = useRef(null);
  const TextAnimate5 = useRef(null);
  const TextAnimate6 = useRef(null);
  const TextAnimate7 = useRef(null);
  const TextAnimate8 = useRef(null);
  const TextAnimate9 = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // ? GSAP TEXT ANIMATION
    const animateContainer = [
      TextAnimate1.current,
      TextAnimate2.current,
      TextAnimate3.current,
      TextAnimate4.current,
      TextAnimate5.current,
      TextAnimate6.current,
      TextAnimate7.current,
      TextAnimate8.current,
      TextAnimate9.current,
    ];
    /* gsap.from(TextAnimate1.current, {
      duration: 1.5,
      yPercent: 100,
      ease: 'power4',
      stagger: 0.1,
    }); */
    gsap.from(animateContainer, {
      duration: 1.5,
      yPercent: 100,
      ease: 'power4',
      stagger: 0.1,
    });
  }, []);

  return (
    <>
      <MainContainer>
        <Greetings>
          <div className="left">
            <div className="text-animate">
              <h3 ref={TextAnimate1}>Hola!</h3>
            </div>
            <div className="text-animate">
              <h3 ref={TextAnimate2}>
                mi nombre es <span>Alonso.</span>
              </h3>
            </div>
          </div>
          <div className="text-animate">
            <h4 className="uppercase" ref={TextAnimate3}>
              {' '}
              Y yo soy un
            </h4>
          </div>
        </Greetings>
        <Title>
          <div className="text-animate">
            <h1 className="uppercase" ref={TextAnimate4}>
              Aspirante
            </h1>
          </div>
          <div className="text-animate">
            <h1 className="uppercase" ref={TextAnimate5}>
              desarrollador
            </h1>
          </div>
          <div className="text-animate">
            <h1 className="uppercase" ref={TextAnimate6}>
              frontend
            </h1>
          </div>
        </Title>
        <Location>
          <div className="text-animate">
            <h3 className="uppercase" ref={TextAnimate7}>
              Basado en México
            </h3>
          </div>
        </Location>
        <Availability>
          <div className="text-animate">
            <div ref={TextAnimate8}>
              <AvailabilityText>
                Disponibilidad: <span>Actualmente estudiante</span>
              </AvailabilityText>
            </div>
          </div>
          <div>
            <AvailabilityCircle className="animate__animated animate__fadeIn animate__delay-1s"></AvailabilityCircle>
          </div>
        </Availability>
        <TempPhoto className="animate__animated animate__fadeInRight animate__delay-1s"></TempPhoto>
        <AboutMe>
          <div className="text-animate">
            <h4 className="uppercase" ref={TextAnimate9}>
              ¡Hola! Soy un estudiante foráneo para la carrera de Ing. en
              Sistemas Computacionales para el ITESO en Guadalajara, Jal.
            </h4>
          </div>
          <p
            className="animate__animated animate__fadeInLeft animate__delay-1s"
            style={{ marginTop: '1vw' }}
          >
            Desde que tengo memoria siempre he sido una persona apasionada por
            la tecnología, aparte que me considero muy visual, por lo que
            aprender sobre el desarrollo frontend fue una decisión relativamente
            fácil.
          </p>
          <p className="animate__animated animate__fadeInLeft animate__delay-1s">
            En mi pasado también destaque como deportista profesional de
            esports, donde tuve una galardonada carrera aparte de haber tenido
            la oportunidad de viajar a múltiples países en todo el mundo.
          </p>
        </AboutMe>
      </MainContainer>
      <SocialButtons>
        <a href="/#" cursor-class="arrow">
          LinkedIn
        </a>
        <a href="/#" cursor-class="arrow">
          Curriculum
        </a>
        <a href="/#" cursor-class="arrow">
          GitHub
        </a>
      </SocialButtons>
    </>
  );
};

const MainContainer = styled.main`
  margin: ${(props) => props.theme.marginSideDefault};
  position: relative;

  display: grid;
  grid-template-columns: repeat(5, 1fr) 27vw;
  grid-template-rows: min-content min-content min-content 43vw;
  grid-template-areas:
    'greet greet greet greet greet .'
    'title title title title title title'
    'locat locat avail avail avail .'
    'about about about about about .';

  @media (max-width: 990px) {
    grid-template-areas:
      'greet greet greet greet greet .'
      'title title title title title title'
      'locat locat . . . avail'
      'about about about about about .';

    grid-template-rows: min-content min-content min-content 50vw;
  }

  @media (max-width: 768px) {
    grid-template-columns: 20vw repeat(4, 1fr) 35rem;
    grid-template-rows: min-content min-content min-content 110vw 50vw;
    grid-template-areas:
      'greet greet greet greet greet greet'
      'title title title title title title'
      'locat locat locat locat locat locat'
      'avail . . . . .'
      'about about about about about about';
  }
`;

const AboutMe = styled.div`
  grid-area: about;
  padding: 8vw 3vw;
  font-size: 1.5vw;

  > div > h4 {
    color: #dfdfdf;
    font-weight: 600;
    margin-bottom: 0.3rem;

    @media (max-width: 920px) {
      font-size: 1.8vw;
    }

    @media (max-width: 768px) {
      font-size: 2.4vw;
    }
  }

  > p {
    font-weight: 500;
    color: var(--color-primary-dark);
    line-height: 2vw;

    &:first-of-type {
      margin-bottom: 1vw;
    }

    > span {
      font-size: 1.5vw;
    }

    @media (max-width: 920px) {
      font-size: 1.8vw;
    }

    @media (max-width: 768px) {
      font-size: 2.3vw;
      line-height: 3vw;
    }
  }
`;

const Greetings = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  font-size: 2.5vw;

  line-height: 3vw;
  white-space: nowrap;

  grid-area: greet;

  > div {
    h4 {
      color: var(--color-primary-dark);
      @media (max-width: 768px) {
        padding-right: 30vw;
      }
    }
  }

  @media (max-width: 920px) {
    font-size: 2.8vw;
    line-height: 4.3vw;

    h3:first-child {
      margin-right: 7rem;
    }
  }
`;

const Title = styled.div`
  grid-area: title;

  font-size: 5vw;
  line-height: 9vw;
  margin: 3vw 0;

  span {
    display: block;
  }

  @media (max-width: 920px) {
    margin: 1.2vw 0;
  }
`;

const Location = styled.div`
  grid-area: locat;
  white-space: nowrap;
  color: var(--color-primary-dark);

  font-size: 2vw;

  @media (max-width: 920px) {
    font-size: 2.7vw;
  }
`;

const Availability = styled.div`
  height: 4vw;
  justify-self: center;

  display: flex;
  align-items: flex-start;
  position: relative;

  grid-area: avail;

  @media (max-width: 768px) {
    transform: rotate(-90deg);
    align-self: center;
    justify-self: end;
  }
`;

const AvailabilityText = styled.h3`
  color: var(--color-primary);
  padding-top: 0.2vw;
  text-transform: uppercase;
  font-size: 2.6vw;

  span {
    color: var(--color-primary-dark);
    display: block;
    font-size: 1.15vw;
  }

  /*  @media (max-width: 920px) {
    font-size: 3.3vw;
    padding-right: 10vw;

    span {
      font-size: 1.7vw;
    } */
  /* } */

  @media (max-width: 768px) {
    font-size: 4.5vw;

    span {
      font-size: 2.3vw;
      white-space: nowrap;
      word-spacing: 0.3rem;
    }
  }
`;

const AvailabilityCircle = styled.p`
  content: '';

  position: absolute;
  top: 0.65vw;
  right: -3.5vw;

  margin-left: 0.3rem;
  width: 3vw;
  height: 3vw;
  border-radius: 50%;
  background-color: var(--color-disponible);

  /* @media (max-width: 920px) {
    width: 4vw;
    height: 4vw;

    top: 0.7vw;
    right: 5vw;
  } */

  @media (max-width: 768px) {
    width: 5vw;
    height: 5vw;

    top: 1.3vw;
    right: -6vw;
  }
`;

const SocialButtons = styled.div`
  grid-area: btns;

  display: flex;
  text-align: center;

  > a {
    width: 33.333%;
    height: 7.5rem;
    cursor: pointer;

    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--color-orange-primary);
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    font-weight: bolder;
    background-color: transparent;
    font-family: 'Inter';

    border: var(--color-primary-dark) 1px solid;

    &:nth-child(odd) {
      border-left: 0;
      border-right: 0;
      color: white;
    }
  }
`;

const TempPhoto = styled.div`
  content: '';
  height: 47vw;
  width: 26vw;
  background-image: url(${profilePhoto});
  background-size: cover;

  position: absolute;
  right: 0;
  top: 33vw;

  @media (max-width: 990px) {
    height: 38vw;
    top: 50vw;
  }

  @media (max-width: 768px) {
    height: 107vw;
    width: 80vw;
    top: 46vw;
  }
`;
