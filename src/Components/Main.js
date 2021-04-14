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
      </Greetings>
    </MainContainer>
  );
};

const MainContainer = styled.main``;
const Greetings = styled.div``;
