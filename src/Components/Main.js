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
`;

const Greetings = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 25rem;
`;

const Title = styled.div``;

const Location = styled.div``;
const Availability = styled.div`
  height: 4vw;
  display: flex;
  align-items: flex-start;
`;

const AvailabilityText = styled.h3`
  color: var(--color-primary);
  padding-top: 0.2vw;
  text-transform: uppercase;
  font-size: 2.5vw;

  position: relative;
  span {
    color: var(--color-primary-dark);
    display: block;
    font-size: 1.15vw;
  }
`;

const AvailabilityCircle = styled.p`
  content: '';
  margin-left: 0.3rem;
  width: 2.5vw;
  height: 2.5vw;
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

  &:hover {
    transform: translateY(0.3rem);
  }
`;

const TempPhoto = styled.div`
  content: '';
  height: 50rem;
  width: 30rem;
  background-color: rgba(189, 189, 189, 1);
`;
