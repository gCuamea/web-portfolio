import React from 'react';
import styled from 'styled-components';

export const Main = () => {
  return (
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
      <CurriculumButton>Curriculum</CurriculumButton>
      <TempPhoto></TempPhoto>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  margin: ${(props) => props.theme.marginSideDefault};
  position: relative;

  display: grid;
  grid-template-columns: repeat(5, 1fr) min-content;
  grid-template-rows: min-content min-content min-content 5rem;
  grid-template-areas:
    'greet greet greet greet greet .'
    'title title title title title title'
    'locat locat avail avail avail .'
    'btn btn about about . .';
`;

const Greetings = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  font-size: 2.5vw;

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

const CurriculumButton = styled.button`
  color: #e5e5e5;
  background-color: transparent;
  border: none;
  padding: 0.5vw 3vw;
  font-size: 1.5vw;
  cursor: pointer;
  transition: transform 0.2s ease;
  font-weight: bolder;
  border: 2px solid var(--color-orange-primary);

  grid-area: btn;

  &:hover {
    transform: translateY(0.3rem);
  }
`;

const TempPhoto = styled.div`
  content: '';
  height: 40rem;
  width: 35rem;
  background-color: rgba(189, 189, 189, 1);

  position: absolute;

  /* grid-area: photo; */
`;
