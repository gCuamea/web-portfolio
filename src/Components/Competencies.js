import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { CompetenciesContentBox } from './CompetenciesContentBox';

export const Competencies = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const animate = (entries) => {
      const [entry] = entries;

      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true);
      }
    };

    const observer = new IntersectionObserver(animate, {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    });

    if (containerRef.current) observer.observe(containerRef.current);
  }, [isVisible]);

  return (
    <CompetenciesContainer>
      <CompetenciesContent>
        <h2
          ref={containerRef}
          style={{ opacity: `${isVisible ? '1' : '0'}` }}
          className={`uppercase letter-spacing-sm animate__animated ${
            isVisible ? 'animate__fadeIn' : ''
          }`}
        >
          Competencias
        </h2>
        <CompetenciesContentBox
          title="Tecnologías Web"
          text="HTML5, CSS3/SASS/Bootstrap 5/Styled components, JavaScript (ES7), JQuery,
            Node."
        />
        <CompetenciesContentBox
          title="Frameworks / librerías web"
          text="ReactJS, Express, JSON Web Tokens."
        />
        <CompetenciesContentBox
          title="Frameworks de React"
          text="Redux, React Router, Jest, Enzyme."
        />
        <CompetenciesContentBox
          title="Bases de datos & devops"
          text="MongoDB, SQL (DB2), Firestore (Firebase), Git."
        />
      </CompetenciesContent>
    </CompetenciesContainer>
  );
};

const CompetenciesContainer = styled.section`
  background-color: transparent;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 7rem 0;
  width: 100%;
`;

const CompetenciesContent = styled.div`
  width: 80%;
  margin: 0 5vw;
  text-align: left;

  /* height: 47rem; */
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  > h2 {
    margin: 2rem 0;
    font-size: 7vw;
    text-align: center;

    @media (max-width: 600px) {
      font-size: 9vw;
    }
  }
`;

/* const CompetenciesContentBox = styled.div`
  padding: 1rem 0;

  > h2 {
    font-size: 2.5rem;
  }

  > p {
    font-size: 1.8rem;
  }
`; */
