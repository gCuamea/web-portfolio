import React from 'react';
import styled from 'styled-components';
import profilePhoto from '../assets/profile-photo.png';

export const Main = () => {
  return (
    <>
      <MainContainer>
        <Greetings>
          <h3>
            Hola! <br />
            mi nombre es Alonso.
          </h3>
          <h3 className="uppercase">Y yo soy un</h3>
        </Greetings>
        <Title>
          <h1 className="uppercase">Aspirante desarrollador frontend</h1>
        </Title>
        <Location>
          <h3 className="uppercase">Basado en México</h3>
        </Location>
        <Availability>
          <AvailabilityText>
            Disponibilidad: <span>Actualmente estudiante</span>
          </AvailabilityText>
          <div>
            <AvailabilityCircle></AvailabilityCircle>
          </div>
        </Availability>
        <TempPhoto></TempPhoto>
      </MainContainer>
      <SocialButtons>
        <a href="/#">LinkedIn</a>
        <a href="/#">Curriculum</a>
        <a href="/#">GitHub</a>
      </SocialButtons>
    </>
  );
};

const MainContainer = styled.main`
  margin: ${(props) => props.theme.marginSideDefault};
  position: relative;

  display: grid;
  grid-template-columns: repeat(5, 1fr) 35rem;
  grid-template-rows: min-content min-content min-content 43vw;
  grid-template-areas:
    'greet greet greet greet greet .'
    'title title title title title title'
    'locat locat avail avail avail .'
    'btns btns btns btns btns btns';
`;

const Greetings = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  font-size: 2.5vw;

  line-height: 3vw;

  grid-area: greet;

  h3:last-child {
    color: var(--color-primary-dark);
  }
`;

const Title = styled.div`
  grid-area: title;

  font-size: 5vw;
  line-height: 9vw;
  margin-bottom: 5vw;

  span {
    display: block;
  }
`;

const Location = styled.div`
  grid-area: locat;
  white-space: nowrap;

  font-size: 2vw;
`;
const Availability = styled.div`
  height: 4vw;
  justify-self: center;

  display: flex;
  align-items: flex-start;
  position: relative;

  grid-area: avail;
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
`;

const AvailabilityCircle = styled.p`
  content: '';

  position: absolute;
  top: 0.75vw;
  right: -3.5vw;

  margin-left: 0.3rem;
  width: 3vw;
  height: 3vw;
  border-radius: 50%;
  background-color: var(--color-disponible);
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
  height: 45vw;
  width: 35rem;
  background-image: url(${profilePhoto});
  background-size: cover;

  position: absolute;
  right: 0;
  top: 35vw;
`;
