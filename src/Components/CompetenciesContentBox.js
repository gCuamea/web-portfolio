import React from 'react';
import styled from 'styled-components';

export const CompetenciesContentBox = ({ title, text }) => {
  return (
    <CompetenciesContentContainer>
      <h2 className="uppercase letter-spacing-sm">{title}</h2>
      <p>{text}</p>
    </CompetenciesContentContainer>
  );
};

const CompetenciesContentContainer = styled.div`
  padding: 1rem 0;

  > h2 {
    font-size: 2.5rem;
  }

  > p {
    font-size: 1.8rem;
  }
`;
